import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
Proxy,
Sub_category,
Params_Get_Sub_category_By_OWNER_ID,
Params_Delete_Sub_category,
Category,
Params_Get_Category_By_OWNER_ID,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
selector: 'app-sub_category',
templateUrl: './sub_category.component.html',
styleUrls: ['./sub_category.component.css']
})
export class Sub_categoryComponent implements OnInit , OnDestroy  {
Get_Sub_category_By_OWNER_ID_Subscription = new Subscription();
searchModel: Params_Get_Sub_category_By_OWNER_ID = new Params_Get_Sub_category_By_OWNER_ID();
data: Sub_category[] = [];

CategoryList!: Category[];
_params_Get_Category_By_OWNER_ID = new Params_Get_Category_By_OWNER_ID();
Get_Category_By_OWNER_ID_Subscription = new Subscription();



constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location : Location ) {}

ngOnInit(): void {

this._params_Get_Category_By_OWNER_ID.OWNER_ID = 1;
this.Get_Category_By_OWNER_ID_Subscription = this.proxy.Get_Category_By_OWNER_ID(this._params_Get_Category_By_OWNER_ID).subscribe(result => this.CategoryList = result);


this.fetchData();
}
ngOnDestroy(): void {
this.Get_Sub_category_By_OWNER_ID_Subscription.unsubscribe();
this.Get_Category_By_OWNER_ID_Subscription.unsubscribe();

}
fetchData() {
this.searchModel.OWNER_ID = 1;
this.Get_Sub_category_By_OWNER_ID_Subscription = this.proxy.Get_Sub_category_By_OWNER_ID_Adv(this.searchModel).subscribe(result => {
 if (result != null) {
result.forEach((element: any) => {
// console.log(element);

  this.data.push(element);
});
}
});
}
AddEntry() {
if (this.data !== undefined) {
if (this.data.filter(e => e.SUB_CATEGORY_ID === -1).length > 0) {
return;
}
}
const record = new Sub_category();
record.SUB_CATEGORY_ID = -1;
this.data.unshift(record);
}
Edit(current: Sub_category) {
this.proxy.Edit_Sub_category(current).subscribe((result) => {
if (result != null) {
this.CmSvc.ShowMessage('Done');
if (current.SUB_CATEGORY_ID === -1) {
this.data.splice(this.data.indexOf(current), 1);
const newEntry: any = result;
newEntry.MyUploadedImages = [];
newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_SUB_CATEGORY]&REL_FIELD=SUB_CATEGORY_IMAGE&REL_KEY=' + newEntry.SUB_CATEGORY_ID;
this.data.unshift(newEntry);
}
}
});
}
Delete(entry: Sub_category) {
const dialogRef = this.dialog.open(DeleteConfirmationComponent);
dialogRef.afterClosed().subscribe(response =>  {
if (response) {
const _params_Delete_Sub_category = new Params_Delete_Sub_category();
_params_Delete_Sub_category.SUB_CATEGORY_ID = entry.SUB_CATEGORY_ID;
this.proxy.Delete_Sub_category(_params_Delete_Sub_category).subscribe(data => {
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
