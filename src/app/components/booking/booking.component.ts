import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { getLocaleFirstDayOfWeek, Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
  Proxy,
  Booking,
  Params_Get_Booking_By_Where,
  Params_Delete_Booking,
  Service_prod,
  Params_Get_Service_prod_By_OWNER_ID,
  Client,
  Params_Get_Client_By_OWNER_ID,
  Business,
  Params_Get_Business_By_OWNER_ID,
  Work_area,
  Params_Get_Work_area_By_OWNER_ID,
  Status,
  Params_Get_Status_By_OWNER_ID,
  Feedback,
  Params_Get_Feedback_By_BOOKING_ID,
  Params_Get_Service_prod_By_BUSINESS_ID,
  Params_Delete_Feedback,
  Params_Get_Business_By_BUSINESS_ID,
  Params_Get_Booking_By_OWNER_ID

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
import { subscribeOn } from 'rxjs-compat/operator/subscribeOn';
import { filterModel } from 'src/app/core/Models/filtermodel';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit, OnDestroy {
  Get_Booking_By_Where_Subscription = new Subscription();
  searchModel: Params_Get_Booking_By_Where = new Params_Get_Booking_By_Where();
  data: Booking[] = [];

  Service_prodList!: Service_prod[];
  _params_Get_Service_prod_By_OWNER_ID = new Params_Get_Service_prod_By_OWNER_ID();
  Get_Service_prod_By_OWNER_ID_Subscription = new Subscription();

  ClientList!: Client[];
  _params_Get_Client_By_OWNER_ID = new Params_Get_Client_By_OWNER_ID();
  Get_Client_By_OWNER_ID_Subscription = new Subscription();

  BusinessList!: Business[];
  _params_Get_Business_By_OWNER_ID = new Params_Get_Business_By_OWNER_ID();
  Get_Business_By_OWNER_ID_Subscription = new Subscription();

  Work_areaList!: Work_area[];
  _params_Get_Work_area_By_OWNER_ID = new Params_Get_Work_area_By_OWNER_ID();
  Get_Work_area_By_OWNER_ID_Subscription = new Subscription();

  StatusList!: Status[];
  _params_Get_Status_By_OWNER_ID = new Params_Get_Status_By_OWNER_ID();
  Get_Status_By_OWNER_ID_Subscription = new Subscription();

  _params_Get_Feedback_By_BOOKING_ID = new Params_Get_Feedback_By_BOOKING_ID();
  Get_Feedback_By_BOOKING_ID_Subscription = new Subscription();

  _params_Get_Business_By_BUSINESS_ID = new Params_Get_Business_By_BUSINESS_ID()
  Get_Business_By_BUSINESS_ID_Subscription = new Subscription();
  public isCollapsed = false;
  selectedItem: Booking = new Booking();

  Edit_Feedback_Subscription = new Subscription();

  oFeedback: Feedback = new Feedback();
  feedbackList: Feedback[] = [];

  i_Params_Get_Service_prod_By_BUSINESS_ID = new Params_Get_Service_prod_By_BUSINESS_ID();
  Get_Service_prod_By_BUSINESS_ID_Subscription = new Subscription();

  _params_Get_Booking_By_OWNER_ID = new Params_Get_Booking_By_OWNER_ID()
  Get_Booking_By_OWNER_ID_Subscription = new Subscription();

  filterModel: filterModel = new filterModel();

  oServiceName?: string;
  oBusinessName?: string;
  oFirstName?: string;

  oBus = new Business();

  constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location: Location) {

   }

  ngOnInit(): void {
    this.searchModel.START_ROW = 0;

    this._params_Get_Service_prod_By_OWNER_ID.OWNER_ID = 1;
    this.Get_Service_prod_By_OWNER_ID_Subscription = this.proxy.Get_Service_prod_By_OWNER_ID_Adv(this._params_Get_Service_prod_By_OWNER_ID).subscribe(result => this.Service_prodList = result);

    this._params_Get_Client_By_OWNER_ID.OWNER_ID = 1;
    this.Get_Client_By_OWNER_ID_Subscription = this.proxy.Get_Client_By_OWNER_ID(this._params_Get_Client_By_OWNER_ID).subscribe(result => this.ClientList = result);

    this._params_Get_Business_By_OWNER_ID.OWNER_ID = 1;
    this.Get_Business_By_OWNER_ID_Subscription = this.proxy.Get_Business_By_OWNER_ID(this._params_Get_Business_By_OWNER_ID).subscribe(result => this.BusinessList = result);

    this._params_Get_Work_area_By_OWNER_ID.OWNER_ID = 1;
    this.Get_Work_area_By_OWNER_ID_Subscription = this.proxy.Get_Work_area_By_OWNER_ID(this._params_Get_Work_area_By_OWNER_ID).subscribe(result => this.Work_areaList = result);

    this._params_Get_Status_By_OWNER_ID.OWNER_ID = 1;
    this.Get_Status_By_OWNER_ID_Subscription = this.proxy.Get_Status_By_OWNER_ID(this._params_Get_Status_By_OWNER_ID).subscribe(result => this.StatusList = result);



    this.fetchData();
  }
  ngOnDestroy(): void {
    this.Get_Booking_By_Where_Subscription.unsubscribe();
    this.Get_Service_prod_By_OWNER_ID_Subscription.unsubscribe();
    this.Get_Client_By_OWNER_ID_Subscription.unsubscribe();
    this.Get_Business_By_OWNER_ID_Subscription.unsubscribe();
    this.Get_Work_area_By_OWNER_ID_Subscription.unsubscribe();
    this.Get_Status_By_OWNER_ID_Subscription.unsubscribe();
    this.Get_Feedback_By_BOOKING_ID_Subscription.unsubscribe();
    this.Get_Service_prod_By_BUSINESS_ID_Subscription.unsubscribe();
    this.Get_Business_By_BUSINESS_ID_Subscription.unsubscribe();
    this.Get_Booking_By_OWNER_ID_Subscription.unsubscribe();

  }
  ClearAndFetch() {
    this.data = [];

    this.searchModel.START_ROW = 0;
    this.fetchData();
  }
  fetchData() {
    this.searchModel.END_ROW = this.searchModel.START_ROW! + 10;
    this.Get_Booking_By_Where_Subscription = this.proxy.Get_Booking_By_Where_Adv(this.searchModel).subscribe(result => {
      if (result != null) {

        result.My_Result.forEach((element: any) => {
          this._params_Get_Feedback_By_BOOKING_ID.BOOKING_ID = element.BOOKING_ID;
          this.Get_Feedback_By_BOOKING_ID_Subscription = this.proxy.Get_Feedback_By_BOOKING_ID(this._params_Get_Feedback_By_BOOKING_ID).subscribe(
            (e) => {

              if (e != null && e.length != 0) {
                element.My_Feedbacks = e;
              }
            }
          )

          this.data.push(element);

        });
      }
    });
  }
  AddEntry() {
    if (this.data !== undefined) {
      if (this.data.filter(e => e.BOOKING_ID === -1).length > 0) {
        return;
      }
    }
    const record = new Booking();
    record.BOOKING_ID = -1;
    // record.WORK_AREA_ID = 9;
    record.STATUS_ID = 1;
    this.data.unshift(record);
  }
  Edit(current: Booking) {
    this.proxy.Edit_Booking(current).subscribe((result) => {
      if (result != null) {
        this.CmSvc.ShowMessage('Done');
        if (current.BOOKING_ID === -1) {
          this.data.splice(this.data.indexOf(current), 1);
          const newEntry: any = result;
          newEntry.MyUploadedImages = [];
          newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_BOOKING]&REL_FIELD=BOOKING_IMAGE&REL_KEY=' + newEntry.BOOKING_ID;
          this.data.unshift(newEntry);
          this.addFeedback(result);
          this.ClearAndFetch();
        }
      }
    });

  }
  Delete(entry: Booking) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
        const _params_Delete_Booking = new Params_Delete_Booking();
        _params_Delete_Booking.BOOKING_ID = entry.BOOKING_ID;
        this.proxy.Delete_Booking(_params_Delete_Booking).subscribe(data => {
          if (data === '') {
            this.data.splice(this.data.indexOf(entry), 1);
          }
        });
      }
    });
  }
  onScroll() {
    this.searchModel.START_ROW = this.searchModel.START_ROW! + 10;
    this.fetchData();
  }
  goBack() {
    this.location.back();
  }

  selectItem(booking: Booking) {
    if (this.selectedItem != booking) {
      this.selectedItem = booking;
    } else {
      this.selectedItem = {} as Booking;
    }
  }

  fetchFeedback(bookingID: any) {
    this._params_Get_Feedback_By_BOOKING_ID.BOOKING_ID = bookingID;
    this.Get_Feedback_By_BOOKING_ID_Subscription = this.proxy.Get_Feedback_By_BOOKING_ID(this._params_Get_Feedback_By_BOOKING_ID).subscribe(
      (e) => {
        if (e != null && e.length != 0) {
          this.oFeedback = e[0];
          this.feedbackList[0] = e[0];
          // console.log(e);

        }
      }
    )
  }


  Edit_Feedback(entry: Booking, feedback: Feedback) {
    this.proxy.Edit_Feedback(feedback).subscribe((result) => {
      if (result != null) {
        this.CmSvc.ShowMessage('Done');
        entry.My_Feedbacks.splice(entry.My_Feedbacks.indexOf(feedback), 1);
        const newEntry: any = result;
        entry.My_Feedbacks.unshift(newEntry);
      }
    });
  }

  Delete_Feedback(entry: Booking, feedback: Feedback) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        const _params_Delete_Feedback = new Params_Delete_Feedback();
        _params_Delete_Feedback.FEEDBACK_ID = feedback.FEEDBACK_ID;
        this.proxy.Delete_Feedback(_params_Delete_Feedback).subscribe(data => {
          if (data === "") {
            entry.My_Feedbacks.splice(entry.My_Feedbacks.indexOf(feedback), 1);
          }
        });
      }
    });
  }
  Cancel_Feedback(entry: Booking, feedback: Feedback) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        feedback.COMMENT = '';
        feedback.RATING = undefined;
        feedback.DATE = '';
        this.proxy.Edit_Feedback(feedback).subscribe(
          (result) => {
            if (result != null) {
              this.CmSvc.ShowMessage("Done");
            }
          }
        )
      }
    })
  }

  fetchServices(id: any) {
    this.i_Params_Get_Service_prod_By_BUSINESS_ID.BUSINESS_ID = id;
    this.Get_Service_prod_By_BUSINESS_ID_Subscription = this.proxy.Get_Service_prod_By_BUSINESS_ID(this.i_Params_Get_Service_prod_By_BUSINESS_ID).subscribe(
      (result) => {
        if (result != null) {
          this.Service_prodList = result;
        }
      }
    )
  }

  private addFeedback(booking: Booking) {
    this.oFeedback.OWNER_ID = 1;
    this.oFeedback.COMMENT = '';
    //  this.oFeedback.RATING = 0;
    this.oFeedback.FEEDBACK_ID = -1;
    this.oFeedback.BOOKING_ID = booking.BOOKING_ID;

    this.Edit_Feedback_Subscription = this.proxy.Edit_Feedback(this.oFeedback).subscribe(
      (result) => {
        if (result != null) {

        }
      }
    )
  }

  filterData(business: string|undefined, client: string|undefined, service: string|undefined) {
    if (business != null && business?.length != 0) {
      this.getByBusinessName(business);

    } else if (client != null && client?.length !=0) {
      this.getByClientName(client);

    } else if (service != null &&service?.length !=0) {
      this.getByServiceName(service)
    } else {
      this.ClearAndFetch()

    }
  }

  getByClientName(name: string) {
    this.data = [];
    this.searchModel.END_ROW = this.searchModel.START_ROW! + 10;
    this.Get_Booking_By_Where_Subscription = this.proxy.Get_Booking_By_Where_Adv(this.searchModel).subscribe(result => {
      if (result != null) {

        result.My_Result.forEach((element: any) => {
          if (element.My_Client.FIRST_NAME.toLowerCase().includes(name.toLowerCase())) {
            this._params_Get_Feedback_By_BOOKING_ID.BOOKING_ID = element.BOOKING_ID;
          this.Get_Feedback_By_BOOKING_ID_Subscription = this.proxy.Get_Feedback_By_BOOKING_ID(this._params_Get_Feedback_By_BOOKING_ID).subscribe(
            (e) => {

              if (e != null && e.length != 0) {
                element.My_Feedbacks = e;
              }
            }
          )
          this.data.push(element);
          }
        });
      }
    });
  }
  getByBusinessName(name: string) {

    this.data = [];

    this._params_Get_Booking_By_OWNER_ID.OWNER_ID = 1;
    this.Get_Booking_By_OWNER_ID_Subscription = this.proxy.Get_Booking_By_OWNER_ID_Adv(this._params_Get_Booking_By_OWNER_ID).subscribe(result => {
      if (result != null) {
        // console.log(result);

        result.forEach((element: any) => {
          // console.log(element.My_Service_prod?.My_Business?.NAME);

          if (element.My_Service_prod!.My_Business!.NAME.toLowerCase().includes(name.toLowerCase())) {
            this._params_Get_Feedback_By_BOOKING_ID.BOOKING_ID = element.BOOKING_ID;
          this.Get_Feedback_By_BOOKING_ID_Subscription = this.proxy.Get_Feedback_By_BOOKING_ID(this._params_Get_Feedback_By_BOOKING_ID).subscribe(
            (e) => {

              if (e != null && e.length != 0) {
                element.My_Feedbacks = e;
              }
            }
          )
          this.data.push(element);
          }
        });
      }
    });
  }

  getByServiceName(name: string) {
    this.data = [];

    this.searchModel.END_ROW = this.searchModel.START_ROW! + 10;
    this.Get_Booking_By_Where_Subscription = this.proxy.Get_Booking_By_Where_Adv(this.searchModel).subscribe(result => {
      if (result != null) {

        result.My_Result.forEach((element: any) => {
          if (element.My_Service_prod.NAME.toLowerCase().includes(name.toLowerCase())) {
            this._params_Get_Feedback_By_BOOKING_ID.BOOKING_ID = element.BOOKING_ID;
          this.Get_Feedback_By_BOOKING_ID_Subscription = this.proxy.Get_Feedback_By_BOOKING_ID(this._params_Get_Feedback_By_BOOKING_ID).subscribe(
            (e) => {

              if (e != null && e.length != 0) {
                element.My_Feedbacks = e;
              }
            }
          )
          this.data.push(element);
          }
        });
      }
    });
  }
}



