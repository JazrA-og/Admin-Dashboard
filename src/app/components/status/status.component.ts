import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
Proxy,
Status,
Params_Get_Status_By_OWNER_ID,
Params_Delete_Status,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
selector: 'app-status',
templateUrl: './status.component.html',
styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit , OnDestroy  {
Get_Status_By_OWNER_ID_Subscription = new Subscription();
searchModel: Params_Get_Status_By_OWNER_ID = new Params_Get_Status_By_OWNER_ID();
data: Status[] = [];



constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location : Location ) {}

ngOnInit(): void {


this.fetchData();
}
ngOnDestroy(): void {
this.Get_Status_By_OWNER_ID_Subscription.unsubscribe();

}
fetchData() {
this.searchModel.OWNER_ID = 1;
this.Get_Status_By_OWNER_ID_Subscription = this.proxy.Get_Status_By_OWNER_ID(this.searchModel).subscribe(result => {
 if (result != null) {
result.forEach((element: any) => {
this.data.push(element);
});
}
});
}
AddEntry() {
if (this.data !== undefined) {
if (this.data.filter(e => e.STATUS_ID === -1).length > 0) {
return;
}
}
const record = new Status();
record.STATUS_ID = -1;
this.data.unshift(record);
}
Edit(current: Status) {
this.proxy.Edit_Status(current).subscribe((result) => {
if (result != null) {
this.CmSvc.ShowMessage('Done');
if (current.STATUS_ID === -1) {
this.data.splice(this.data.indexOf(current), 1);
const newEntry: any = result;
newEntry.MyUploadedImages = [];
newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_STATUS]&REL_FIELD=STATUS_IMAGE&REL_KEY=' + newEntry.STATUS_ID;
this.data.unshift(newEntry);
}
}
});
}
Delete(entry: Status) {
const dialogRef = this.dialog.open(DeleteConfirmationComponent);
dialogRef.afterClosed().subscribe(response =>  {
if (response) {
const _params_Delete_Status = new Params_Delete_Status();
_params_Delete_Status.STATUS_ID = entry.STATUS_ID;
this.proxy.Delete_Status(_params_Delete_Status).subscribe(data => {
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
