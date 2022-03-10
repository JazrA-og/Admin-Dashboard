import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
  Proxy,
  Business,
  Params_Get_Business_By_Where,
  Params_Get_Work_area_By_OWNER_ID,
  Params_Delete_Business,
  Work_area,
  Params_Delete_User_By_USERNAME,
  Params_Get_Work_list_By_BUSINESS_ID,
  Work_list,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit, OnDestroy {
  Get_Business_By_Where_Subscription = new Subscription();
  searchModel: Params_Get_Business_By_Where = new Params_Get_Business_By_Where();
  data: Business[] = [];
  businessAreaList: Work_area[] = [];
  businessWorkList: Work_list[] = [];
  editWorkList: Work_list[] = [];
  workList: Work_list[] = [];
  oWorkList = new Work_list();

  public isCollapsed = false;
  selectedItem: Business = new Business();

  workAreaList: Work_area[] = [];
  params_Get_Work_area_By_OWNER_ID = new Params_Get_Work_area_By_OWNER_ID();
  Get_Work_area_By_OWNER_ID_Subscription = new Subscription();
  i_Params_Delete_User_By_USERNAME: Params_Delete_User_By_USERNAME = new Params_Delete_User_By_USERNAME();
  Delete_User_By_USERNAME_Subscription =new Subscription();

  i_Params_Get_Work_list_By_BUSINESS_ID = new Params_Get_Work_list_By_BUSINESS_ID();
  Get_Work_list_By_BUSINESS_ID_Subscription = new Subscription();

  Edit_Work_list_Subscription = new Subscription();

  constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location: Location) { }

  ngOnInit(): void {
    this.searchModel.START_ROW = 0;
    this.params_Get_Work_area_By_OWNER_ID.OWNER_ID = 1;
    this.Get_Work_area_By_OWNER_ID_Subscription = this.proxy.Get_Work_area_By_OWNER_ID(this.params_Get_Work_area_By_OWNER_ID).subscribe(
      (result) => {
        if (result != null) {
          this.workAreaList = result;
        }
      }
    )

    this.fetchData();
  }
  ngOnDestroy(): void {
    this.Get_Business_By_Where_Subscription.unsubscribe();
    this.Get_Work_area_By_OWNER_ID_Subscription.unsubscribe();
    this.Get_Work_list_By_BUSINESS_ID_Subscription.unsubscribe();
    this.Edit_Work_list_Subscription.unsubscribe();

  }
  ClearAndFetch() {
    this.data = [];
    this.searchModel.START_ROW = 0;
    this.fetchData();
  }
  fetchData() {
    this.searchModel.END_ROW = this.searchModel.START_ROW! + 10;
    this.Get_Business_By_Where_Subscription = this.proxy.Get_Business_By_Where(this.searchModel).subscribe(result => {
      if (result != null) {
        result.My_Result.forEach((element: any) => {
          this.i_Params_Get_Work_list_By_BUSINESS_ID.BUSINESS_ID = element.BUSINESS_ID;
          this.Get_Work_list_By_BUSINESS_ID_Subscription = this.proxy.Get_Work_list_By_BUSINESS_ID_Adv(this.i_Params_Get_Work_list_By_BUSINESS_ID).subscribe(
            (e) => {
              if (e != null) {
                // console.log(e);

                element.My_Work_lists = e;
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
      if (this.data.filter(e => e.BUSINESS_ID === -1).length > 0) {
        return;
      }
    }
    const record = new Business();
    record.BUSINESS_ID = -1;
    record.IS_VALIDATED = false;
    record.IS_CHECKMARK = false;
    record.IS_ACTIVE = false;
    record.IS_BOOSTED = false;
    this.data.unshift(record);
  }
  Edit(current: Business) {
    this.proxy.Edit_Business(current).subscribe((result) => {
      if (result != null) {
        this.CmSvc.ShowMessage('Done');
        if (current.BUSINESS_ID === -1) {
          this.data.splice(this.data.indexOf(current), 1);
          const newEntry: any = result;
          newEntry.MyUploadedImages = [];
          newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_BUSINESS]&REL_FIELD=BUSINESS_IMAGE&REL_KEY=' + newEntry.BUSINESS_ID;
          this.data.unshift(newEntry);

            this.workAreaList.forEach((element) => {
              this.oWorkList.BUSINESS_ID = result.BUSINESS_ID;
              this.oWorkList.OWNER_ID = 1;
              this.oWorkList.IS_TRUE = false;
              this.oWorkList.WORK_AREA_ID = element.WORK_AREA_ID;
              this.oWorkList.WORK_LIST_ID = -1
              this.editWorkList.push(this.oWorkList);
              this.oWorkList = {} as Work_list;
            })
            this.editWorkList.forEach((e) => {
              this.Edit_Work_list_Subscription = this.proxy.Edit_Work_list(e).subscribe(
                (res) => {

                }
              )
            })

        }
      }

    });
  }
  Delete(entry: Business) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        const _params_Delete_Business = new Params_Delete_Business();
        _params_Delete_Business.BUSINESS_ID = entry.BUSINESS_ID;
        this.proxy.Delete_Business(_params_Delete_Business).subscribe(data => {
          if (data === '') {
            this.data.splice(this.data.indexOf(entry), 1);
          }
        });
      }
    });

    this.i_Params_Delete_User_By_USERNAME.USERNAME = entry.USERNAME;
   this.Delete_User_By_USERNAME_Subscription= this.proxy.Delete_User_By_USERNAME(this.i_Params_Delete_User_By_USERNAME).subscribe();

  }
  onScroll() {
    this.searchModel.START_ROW = this.searchModel.START_ROW! + 10;
    this.fetchData();
  }
  goBack() {
    this.location.back();
  }

  selectItem(business: Business) {
    if (this.selectedItem != business) {
      this.selectedItem = business;
    } else {
      this.selectedItem = {} as Business;
    }
  }

  saveWorkAreaList(business: Business) {
    business.My_Work_areas = this.businessAreaList;
  }
  onSaveCheckBox(business: Business) {
    business.My_Work_lists.forEach((element) => {
      this.Edit_Work_list_Subscription = this.proxy.Edit_Work_list(element).subscribe(
        (res) => {

        }
      )
    })
    this.CmSvc.ShowMessage("Done");
    // console.log(this.workAreaList);
  }

  changeCheckBox(event: any, item: Work_list,business: Business) {
    // if (event.checked == true) {
    //   const oWorkList: Work_list = new Work_list();
    //   oWorkList.BUSINESS_ID = business.BUSINESS_ID;
    //   oWorkList.IS_TRUE = event.checked;
    //   oWorkList.WORK_AREA_ID = item.WORK_AREA_ID;
    //   oWorkList.OWNER_ID = 1;

    // }
    // console.log(event);
    // console.log(item);


  }
}
