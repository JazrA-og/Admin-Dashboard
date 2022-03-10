import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
  Proxy,
  Client,
  Params_Get_Client_By_Where,
  Params_Delete_Client,
  Params_Delete_User_By_USERNAME,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit, OnDestroy {
  Get_Client_By_Where_Subscription = new Subscription();
  searchModel: Params_Get_Client_By_Where = new Params_Get_Client_By_Where();
  data: Client[] = [];

  public isCollapsed = false;
  selectedItem: Client = new Client();
  i_Params_Delete_User_By_USERNAME = new Params_Delete_User_By_USERNAME();
  Delete_User_By_USERNAME_Subscription= new Subscription();

  constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location: Location) { }

  ngOnInit(): void {
    this.searchModel.START_ROW = 0;


    this.fetchData();
  }
  ngOnDestroy(): void {
    this.Get_Client_By_Where_Subscription.unsubscribe();

  }
  ClearAndFetch() {
    this.data = [];
    this.searchModel.START_ROW = 0;
    this.fetchData();
  }
  fetchData() {
    this.searchModel.END_ROW = this.searchModel.START_ROW! + 10;
    this.Get_Client_By_Where_Subscription = this.proxy.Get_Client_By_Where(this.searchModel).subscribe(result => {
      if (result != null) {
        result.My_Result.forEach((element: any) => {
          this.data.push(element);
        });
      }
    });
  }
  AddEntry() {
    if (this.data !== undefined) {
      if (this.data.filter(e => e.CLIENT_ID === -1).length > 0) {
        return;
      }
    }
    const record = new Client();
    record.CLIENT_ID = -1;
    record.IS_ACTIVE = false;
    record.IS_VERIFIED = false;
    this.data.unshift(record);
  }
  Edit(current: Client) {
    // console.log("Edit");

    this.proxy.Edit_Client(current).subscribe((result) => {
      if (result != null) {
        // console.log(result);

        this.CmSvc.ShowMessage('Done');
        if (current.CLIENT_ID === -1) {
          this.data.splice(this.data.indexOf(current), 1);
          const newEntry: any = result;
          newEntry.MyUploadedImages = [];
          newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_CLIENT]&REL_FIELD=CLIENT_IMAGE&REL_KEY=' + newEntry.CLIENT_ID;
          this.data.unshift(newEntry);
        }
      }
    });
  }
  Delete(entry: Client) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
        const _params_Delete_Client = new Params_Delete_Client();
        _params_Delete_Client.CLIENT_ID = entry.CLIENT_ID;
        this.proxy.Delete_Client(_params_Delete_Client).subscribe(data => {
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

  selectItem(client: Client) {
    if (this.selectedItem != client) {
      this.selectedItem = client;
    } else {
      this.selectedItem = {} as Client;
    }
  }

}
