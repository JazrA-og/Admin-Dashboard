import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
Proxy,
Feedback,
Params_Get_Feedback_By_Where,
Params_Delete_Feedback,
Booking,
Params_Get_Booking_By_OWNER_ID,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
selector: 'app-feedback',
templateUrl: './feedback.component.html',
styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit , OnDestroy  {
Get_Feedback_By_Where_Subscription = new Subscription();
searchModel: Params_Get_Feedback_By_Where = new Params_Get_Feedback_By_Where();
data: Feedback[] = [];

BookingList!: Booking[];
_params_Get_Booking_By_OWNER_ID = new Params_Get_Booking_By_OWNER_ID();
Get_Booking_By_OWNER_ID_Subscription = new Subscription();



constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location : Location ) {}

ngOnInit(): void {

this._params_Get_Booking_By_OWNER_ID.OWNER_ID = 1;
this.Get_Booking_By_OWNER_ID_Subscription = this.proxy.Get_Booking_By_OWNER_ID(this._params_Get_Booking_By_OWNER_ID).subscribe(result => this.BookingList = result);


this.fetchData();
}
ngOnDestroy(): void {
this.Get_Feedback_By_Where_Subscription.unsubscribe();
this.Get_Booking_By_OWNER_ID_Subscription.unsubscribe();

}
fetchData() {
this.searchModel.OWNER_ID = 1;
this.Get_Feedback_By_Where_Subscription = this.proxy.Get_Feedback_By_Where(this.searchModel).subscribe(result => {
 if (result != null) {
result.My_Result.forEach((element: any) => {
this.data.push(element);
});
}
});
}
AddEntry() {
if (this.data !== undefined) {
if (this.data.filter(e => e.FEEDBACK_ID === -1).length > 0) {
return;
}
}
const record = new Feedback();
record.FEEDBACK_ID = -1;
this.data.unshift(record);
}
Edit(current: Feedback) {
this.proxy.Edit_Feedback(current).subscribe((result) => {
if (result != null) {
this.CmSvc.ShowMessage('Done');
if (current.FEEDBACK_ID === -1) {
this.data.splice(this.data.indexOf(current), 1);
const newEntry: any = result;
newEntry.MyUploadedImages = [];
newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_FEEDBACK]&REL_FIELD=FEEDBACK_IMAGE&REL_KEY=' + newEntry.FEEDBACK_ID;
this.data.unshift(newEntry);
}
}
});
}
Delete(entry: Feedback) {
const dialogRef = this.dialog.open(DeleteConfirmationComponent);
dialogRef.afterClosed().subscribe(response =>  {
if (response) {
const _params_Delete_Feedback = new Params_Delete_Feedback();
_params_Delete_Feedback.FEEDBACK_ID = entry.FEEDBACK_ID;
this.proxy.Delete_Feedback(_params_Delete_Feedback).subscribe(data => {
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
