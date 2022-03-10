import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
Proxy,
Coordinates,
Params_Get_Coordinates_By_OWNER_ID,
Params_Delete_Coordinates,
Booking,
Params_Get_Booking_By_OWNER_ID,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
selector: 'app-coordinates',
templateUrl: './coordinates.component.html',
styleUrls: ['./coordinates.component.css']
})
export class CoordinatesComponent implements OnInit , OnDestroy  {
Get_Coordinates_By_OWNER_ID_Subscription = new Subscription();
searchModel: Params_Get_Coordinates_By_OWNER_ID = new Params_Get_Coordinates_By_OWNER_ID();
data: Coordinates[] = [];

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
this.Get_Coordinates_By_OWNER_ID_Subscription.unsubscribe();
this.Get_Booking_By_OWNER_ID_Subscription.unsubscribe();

}
fetchData() {
this.searchModel.OWNER_ID = 1;
this.Get_Coordinates_By_OWNER_ID_Subscription = this.proxy.Get_Coordinates_By_OWNER_ID(this.searchModel).subscribe(result => {
 if (result != null) {
result.forEach((element: any) => {
this.data.push(element);
});
}
});
}
AddEntry() {
if (this.data !== undefined) {
if (this.data.filter(e => e.COORDINATES_ID === -1).length > 0) {
return;
}
}
const record = new Coordinates();
record.COORDINATES_ID = -1;
this.data.unshift(record);
}
Edit(current: Coordinates) {
this.proxy.Edit_Coordinates(current).subscribe((result) => {
if (result != null) {
this.CmSvc.ShowMessage('Done');
if (current.COORDINATES_ID === -1) {
this.data.splice(this.data.indexOf(current), 1);
const newEntry: any = result;
newEntry.MyUploadedImages = [];
newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_COORDINATES]&REL_FIELD=COORDINATES_IMAGE&REL_KEY=' + newEntry.COORDINATES_ID;
this.data.unshift(newEntry);
}
}
});
}
Delete(entry: Coordinates) {
const dialogRef = this.dialog.open(DeleteConfirmationComponent);
dialogRef.afterClosed().subscribe(response =>  {
if (response) {
const _params_Delete_Coordinates = new Params_Delete_Coordinates();
_params_Delete_Coordinates.COORDINATES_ID = entry.COORDINATES_ID;
this.proxy.Delete_Coordinates(_params_Delete_Coordinates).subscribe(data => {
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
