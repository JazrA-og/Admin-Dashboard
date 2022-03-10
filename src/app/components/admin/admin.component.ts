import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
  Proxy,
  Admin,
  Params_Get_Admin_By_Where,
  Params_Delete_Admin,
  Params_Delete_User_By_USERNAME

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { SaveCredentialsService } from 'src/app/core/services/save-credentials.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  Get_Admin_By_Where_Subscription = new Subscription();
  searchModel: Params_Get_Admin_By_Where = new Params_Get_Admin_By_Where();
  data: Admin[] = [];
  i_Params_Delete_User_By_USERNAME: Params_Delete_User_By_USERNAME = new Params_Delete_User_By_USERNAME();
  Delete_User_By_USERNAME_Subscription = new Subscription();

  public isCollapsed = false;
  selectedAdmin: Admin = new Admin();

  userCode!: string;

  constructor(private proxy: Proxy,
    private CmSvc: CommonService,
    private dialog: MatDialog,
    private location: Location,
    private saveCred: SaveCredentialsService,
    private localStorage: LocalStorageService) { }

  ngOnInit(): void {
    this.searchModel.START_ROW = 0;
    // console.log(this.localStorage.loadInfo());

    this.userCode = this.saveCred.getUserCode();

    this.fetchData();
  }
  ngOnDestroy(): void {
    this.Get_Admin_By_Where_Subscription.unsubscribe();
    this.Delete_User_By_USERNAME_Subscription.unsubscribe();

  }
  ClearAndFetch() {
    this.data = [];
    this.searchModel.START_ROW = 0;
    this.fetchData();
  }
  fetchData() {
    this.searchModel.END_ROW = this.searchModel.START_ROW! + 10;
    this.Get_Admin_By_Where_Subscription = this.proxy.Get_Admin_By_Where(this.searchModel).subscribe(result => {
      if (result != null) {
        result.My_Result.forEach((element: any) => {
          this.data.push(element);
        });
      }
    });
  }
  AddEntry() {
    if (this.data !== undefined) {
      if (this.data.filter(e => e.ADMIN_ID === -1).length > 0) {
        return;
      }
    }
    const record = new Admin();
    record.ADMIN_ID = -1;
    record.IS_ACTIVE = false;
    this.data.unshift(record);
  }
  Edit(current: Admin) {
    this.proxy.Edit_Admin(current).subscribe((result) => {
      if (result != null) {
        this.CmSvc.ShowMessage('Done');
        if (current.ADMIN_ID === -1) {
          this.data.splice(this.data.indexOf(current), 1);
          const newEntry: any = result;
          newEntry.MyUploadedImages = [];
          newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_ADMIN]&REL_FIELD=ADMIN_IMAGE&REL_KEY=' + newEntry.ADMIN_ID;
          this.data.unshift(newEntry);
        }
      }
    });
  }
  Delete(entry: Admin) {
    if (this.userCode != "001") {
      this.CmSvc.ShowMessage("You don't have permission to delete this account");
    } else {
      const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        const _params_Delete_Admin = new Params_Delete_Admin();
        _params_Delete_Admin.ADMIN_ID = entry.ADMIN_ID;
        this.proxy.Delete_Admin(_params_Delete_Admin).subscribe(data => {
          if (data === '') {
            this.data.splice(this.data.indexOf(entry), 1);
          }
        });
      }
    });
    this.i_Params_Delete_User_By_USERNAME.USERNAME = entry.USERNAME;
   this.Delete_User_By_USERNAME_Subscription= this.proxy.Delete_User_By_USERNAME(this.i_Params_Delete_User_By_USERNAME).subscribe();

    }
    }
  onScroll() {
    this.searchModel.START_ROW = this.searchModel.START_ROW! + 10;
    this.fetchData();
  }
  goBack() {
    this.location.back();
  }


  selectAdmin(admin: Admin) {
    if (this.selectedAdmin != admin) {
      this.selectedAdmin = admin;
    } else {
      this.selectedAdmin = {}as Admin;
    }
    // this.selectedAdmin = admin;
  }
}
