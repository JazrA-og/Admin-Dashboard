import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
  Proxy,
  Work_area,
  Params_Get_Work_area_By_OWNER_ID,
  Params_Get_Business_By_OWNER_ID,
  Params_Get_Work_list_By_BUSINESS_ID,
  Params_Delete_Work_area,
  Business,
  Work_list

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
  selector: 'app-work_area',
  templateUrl: './work_area.component.html',
  styleUrls: ['./work_area.component.css']
})
export class Work_areaComponent implements OnInit, OnDestroy {
  Get_Work_area_By_OWNER_ID_Subscription = new Subscription();
  searchModel: Params_Get_Work_area_By_OWNER_ID = new Params_Get_Work_area_By_OWNER_ID();
  data: Work_area[] = [];
  businessList: Business[] = [];
  workList: Work_list[] = [];
  oWork = new Work_list();

  i_Params_Get_Work_list_By_BUSINESS_ID = new Params_Get_Work_list_By_BUSINESS_ID();
  Get_Work_list_By_BUSINESS_ID_Subscription = new Subscription();

  i_Params_Get_Business_By_OWNER_ID = new Params_Get_Business_By_OWNER_ID();
  Get_Business_By_OWNER_ID_Subscription = new Subscription();

  Edit_Work_list_Subscription = new Subscription();

  constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location: Location) { }

  ngOnInit(): void {
    this.i_Params_Get_Business_By_OWNER_ID.OWNER_ID = 1;
    this.Get_Business_By_OWNER_ID_Subscription = this.proxy.Get_Business_By_OWNER_ID_Adv(this.i_Params_Get_Business_By_OWNER_ID).subscribe(
      (res) => {
        if (res != null) {
          res.forEach((business) => {
            this.i_Params_Get_Work_list_By_BUSINESS_ID.BUSINESS_ID = business.BUSINESS_ID;
            this.Get_Work_list_By_BUSINESS_ID_Subscription = this.proxy.Get_Work_list_By_BUSINESS_ID(this.i_Params_Get_Work_list_By_BUSINESS_ID).subscribe(
              (work) => {
                business.My_Work_lists = work;
              }
            )
          })
          this.businessList = res;
          // console.log(this.businessList);

        }
      }
    )

    this.fetchData();
  }
  ngOnDestroy(): void {
    this.Get_Work_area_By_OWNER_ID_Subscription.unsubscribe();
    this.Get_Business_By_OWNER_ID_Subscription.unsubscribe();
    this.Edit_Work_list_Subscription.unsubscribe();

  }
  fetchData() {
    this.searchModel.OWNER_ID = 1;
    this.Get_Work_area_By_OWNER_ID_Subscription = this.proxy.Get_Work_area_By_OWNER_ID(this.searchModel).subscribe(result => {
      if (result != null) {
        result.forEach((element: any) => {
          this.data.push(element);
        });
      }
    });
  }
  AddEntry() {
    if (this.data !== undefined) {
      if (this.data.filter(e => e.WORK_AREA_ID === -1).length > 0) {
        return;
      }
    }
    const record = new Work_area();
    record.WORK_AREA_ID = -1;
    this.data.unshift(record);
  }
  Edit(current: Work_area) {
    this.proxy.Edit_Work_area(current).subscribe((result) => {
      if (result != null) {
        this.CmSvc.ShowMessage('Done');
        if (current.WORK_AREA_ID === -1) {
          this.data.splice(this.data.indexOf(current), 1);
          const newEntry: any = result;
          newEntry.MyUploadedImages = [];
          newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_WORK_AREA]&REL_FIELD=WORK_AREA_IMAGE&REL_KEY=' + newEntry.WORK_AREA_ID;
          this.data.unshift(newEntry);
          this.addWorkList(result);
        }
      }
    });
  }
  Delete(entry: Work_area) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
        const _params_Delete_Work_area = new Params_Delete_Work_area();
        _params_Delete_Work_area.WORK_AREA_ID = entry.WORK_AREA_ID;
        this.proxy.Delete_Work_area(_params_Delete_Work_area).subscribe(data => {
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
  addWorkList(workArea: Work_area) {
    this.businessList.forEach((business) => {
        this.oWork.OWNER_ID = 1;
        this.oWork.WORK_LIST_ID = -1;
        this.oWork.IS_TRUE = false;
        this.oWork.BUSINESS_ID = business.BUSINESS_ID;
      this.oWork.WORK_AREA_ID = workArea.WORK_AREA_ID;

      this.Edit_Work_list_Subscription = this.proxy.Edit_Work_list(this.oWork).subscribe();
      this.oWork = {} as Work_list;
    })
  }
}
