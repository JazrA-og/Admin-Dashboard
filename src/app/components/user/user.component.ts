import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
Proxy,
User,
Params_Get_User_By_OWNER_ID,
Params_Delete_User,
SetupEntry,
Params_Get_SetupEntries_Per_Table,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
selector: 'app-user',
templateUrl: './user.component.html',
styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit , OnDestroy  {
Get_User_By_OWNER_ID_Subscription = new Subscription();
searchModel: Params_Get_User_By_OWNER_ID = new Params_Get_User_By_OWNER_ID();
data: User[] = [];


User_typeList = [];
_params_Get_SetupEntries_Per_Table_For_User_type = new Params_Get_SetupEntries_Per_Table();
Get_SetupEntries_Per_Table_For_User_type_Subscription = new Subscription();


constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location : Location ) {}



ngOnInit(): void {

this._params_Get_SetupEntries_Per_Table_For_User_type.TBL_NAME = '_USER_TYPE';
  this.Get_SetupEntries_Per_Table_For_User_type_Subscription = this.proxy.Get_SetupEntries_Per_Table(this._params_Get_SetupEntries_Per_Table_For_User_type).subscribe((result) => {
    if (result != null) {
      result.forEach((element: any) => {
        this.data.push(element);
      });
    }
});


this.fetchData();
}
ngOnDestroy(): void {
this.Get_User_By_OWNER_ID_Subscription.unsubscribe();

this.Get_SetupEntries_Per_Table_For_User_type_Subscription.unsubscribe();
}
fetchData() {
this.searchModel.OWNER_ID = 1;
this.Get_User_By_OWNER_ID_Subscription = this.proxy.Get_User_By_OWNER_ID(this.searchModel).subscribe(result => {
 if (result != null) {
result.forEach((element: any) => {
this.data.push(element);
});
}
});
}
AddEntry() {
if (this.data !== undefined) {
if (this.data.filter(e => e.USER_ID === -1).length > 0) {
return;
}
}
const record = new User();
record.USER_ID = -1;
record.IS_ACTIVE = false;
this.data.unshift(record);
}
Edit(current: User) {
this.proxy.Edit_User(current).subscribe((result) => {
if (result != null) {
this.CmSvc.ShowMessage('Done');
if (current.USER_ID === -1) {
this.data.splice(this.data.indexOf(current), 1);
const newEntry: any = result;
newEntry.MyUploadedImages = [];
newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_USER]&REL_FIELD=USER_IMAGE&REL_KEY=' + newEntry.USER_ID;
this.data.unshift(newEntry);
}
}
});
}
Delete(entry: User) {
const dialogRef = this.dialog.open(DeleteConfirmationComponent);
dialogRef.afterClosed().subscribe(response =>  {
if (response) {
const _params_Delete_User = new Params_Delete_User();
_params_Delete_User.USER_ID = entry.USER_ID;
this.proxy.Delete_User(_params_Delete_User).subscribe(data => {
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
