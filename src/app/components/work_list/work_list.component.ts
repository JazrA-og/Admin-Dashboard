import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
  Proxy,
  Work_list,
  Params_Get_Work_list_By_OWNER_ID,
  Params_Delete_Work_list,
  Business,
  Params_Get_Business_By_OWNER_ID,
  Work_area,
  Params_Get_Work_area_By_OWNER_ID,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
  selector: 'app-work_list',
  templateUrl: './work_list.component.html',
  styleUrls: ['./work_list.component.css']
})
export class Work_listComponent implements OnInit, OnDestroy {
  Get_Work_list_By_OWNER_ID_Subscription = new Subscription();
  searchModel: Params_Get_Work_list_By_OWNER_ID = new Params_Get_Work_list_By_OWNER_ID();
  data: Work_list[] = [];

  BusinessList!: Business[];
  _params_Get_Business_By_OWNER_ID = new Params_Get_Business_By_OWNER_ID();
  Get_Business_By_OWNER_ID_Subscription = new Subscription();

  Work_areaList!: Work_area[];
  _params_Get_Work_area_By_OWNER_ID = new Params_Get_Work_area_By_OWNER_ID();
  Get_Work_area_By_OWNER_ID_Subscription = new Subscription();



  constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location: Location) { }

  ngOnInit(): void {

    this._params_Get_Business_By_OWNER_ID.OWNER_ID = 1;
    this.Get_Business_By_OWNER_ID_Subscription = this.proxy.Get_Business_By_OWNER_ID(this._params_Get_Business_By_OWNER_ID).subscribe(result => this.BusinessList = result);

    this._params_Get_Work_area_By_OWNER_ID.OWNER_ID = 1;
    this.Get_Work_area_By_OWNER_ID_Subscription = this.proxy.Get_Work_area_By_OWNER_ID(this._params_Get_Work_area_By_OWNER_ID).subscribe(result => this.Work_areaList = result);


    this.fetchData();
  }
  ngOnDestroy(): void {
    this.Get_Work_list_By_OWNER_ID_Subscription.unsubscribe();
    this.Get_Business_By_OWNER_ID_Subscription.unsubscribe();
    this.Get_Work_area_By_OWNER_ID_Subscription.unsubscribe();

  }
  fetchData() {
    this.searchModel.OWNER_ID = 1;
    this.Get_Work_list_By_OWNER_ID_Subscription = this.proxy.Get_Work_list_By_OWNER_ID(this.searchModel).subscribe(result => {
      if (result != null) {
        result.forEach((element: any) => {
          this.data.push(element);
        });
      }
    });
  }
  AddEntry() {
    if (this.data !== undefined) {
      if (this.data.filter(e => e.WORK_LIST_ID === -1).length > 0) {
        return;
      }
    }
    const record = new Work_list();
    record.WORK_LIST_ID = -1;
    record.IS_TRUE = false;
    this.data.unshift(record);
  }
  Edit(current: Work_list) {
    this.proxy.Edit_Work_list(current).subscribe((result) => {
      if (result != null) {
        this.CmSvc.ShowMessage('Done');
        if (current.WORK_LIST_ID === -1) {
          this.data.splice(this.data.indexOf(current), 1);
          const newEntry: any = result;
          newEntry.MyUploadedImages = [];
          newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_WORK_LIST]&REL_FIELD=WORK_LIST_IMAGE&REL_KEY=' + newEntry.WORK_LIST_ID;
          this.data.unshift(newEntry);
        }
      }
    });
  }
  Delete(entry: Work_list) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        const _params_Delete_Work_list = new Params_Delete_Work_list();
        _params_Delete_Work_list.WORK_LIST_ID = entry.WORK_LIST_ID;
        this.proxy.Delete_Work_list(_params_Delete_Work_list).subscribe(data => {
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
