import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
Proxy,
Currency,
Params_Get_Currency_By_OWNER_ID,
Params_Delete_Currency,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
selector: 'app-currency',
templateUrl: './currency.component.html',
styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit , OnDestroy  {
Get_Currency_By_OWNER_ID_Subscription = new Subscription();
searchModel: Params_Get_Currency_By_OWNER_ID = new Params_Get_Currency_By_OWNER_ID();
data: Currency[] = [];



constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location : Location ) {}

ngOnInit(): void {


this.fetchData();
}
ngOnDestroy(): void {
this.Get_Currency_By_OWNER_ID_Subscription.unsubscribe();

}
fetchData() {
this.searchModel.OWNER_ID = 1;
this.Get_Currency_By_OWNER_ID_Subscription = this.proxy.Get_Currency_By_OWNER_ID(this.searchModel).subscribe(result => {
 if (result != null) {
result.forEach((element: any) => {
this.data.push(element);
});
}
});
}
AddEntry() {
if (this.data !== undefined) {
if (this.data.filter(e => e.CURRENCY_ID === -1).length > 0) {
return;
}
}
const record = new Currency();
record.CURRENCY_ID = -1;
this.data.unshift(record);
}
Edit(current: Currency) {
this.proxy.Edit_Currency(current).subscribe((result) => {
if (result != null) {
this.CmSvc.ShowMessage('Done');
if (current.CURRENCY_ID === -1) {
this.data.splice(this.data.indexOf(current), 1);
const newEntry: any = result;
newEntry.MyUploadedImages = [];
newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_CURRENCY]&REL_FIELD=CURRENCY_IMAGE&REL_KEY=' + newEntry.CURRENCY_ID;
this.data.unshift(newEntry);
}
}
});
}
Delete(entry: Currency) {
const dialogRef = this.dialog.open(DeleteConfirmationComponent);
dialogRef.afterClosed().subscribe(response =>  {
if (response) {
const _params_Delete_Currency = new Params_Delete_Currency();
_params_Delete_Currency.CURRENCY_ID = entry.CURRENCY_ID;
this.proxy.Delete_Currency(_params_Delete_Currency).subscribe(data => {
if (data === '') {
this.data.splice(this.data.indexOf(entry), 1);
}
});
 }
});
}
goBack() {
this.location.back();
}
}
