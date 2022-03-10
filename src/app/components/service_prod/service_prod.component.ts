import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
  Proxy,
  Service_prod,
  Params_Get_Service_prod_By_Where,
  Params_Delete_Service_prod,
  Business,
  Params_Get_Business_By_OWNER_ID,
  Sub_category,
  Params_Get_Sub_category_By_OWNER_ID,
  Category,
  Params_Get_Category_By_OWNER_ID,
  Params_Get_Sub_category_By_CATEGORY_ID,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
  selector: 'app-service_prod',
  templateUrl: './service_prod.component.html',
  styleUrls: ['./service_prod.component.css']
})
export class Service_prodComponent implements OnInit, OnDestroy {
  Get_Service_prod_By_Where_Subscription = new Subscription();
  searchModel: Params_Get_Service_prod_By_Where = new Params_Get_Service_prod_By_Where();
  data: Service_prod[] = [];

  BusinessList!: Business[];
  _params_Get_Business_By_OWNER_ID = new Params_Get_Business_By_OWNER_ID();
  Get_Business_By_OWNER_ID_Subscription = new Subscription();

  Sub_categoryList!: Sub_category[];
  _params_Get_Sub_category_By_OWNER_ID = new Params_Get_Sub_category_By_OWNER_ID();
  Get_Sub_category_By_OWNER_ID_Subscription = new Subscription();

  _params_Get_Sub_category_By_CATEGORY_ID = new Params_Get_Sub_category_By_CATEGORY_ID();
  Get_Sub_category_By_CATEGORY_ID_Subscription = new Subscription();

  CategoryList!: Category[];
  _params_Get_Category_By_OWNER_ID = new Params_Get_Category_By_OWNER_ID();
  Get_Category_By_OWNER_ID_Subscription = new Subscription();

  public isCollapsed = false;
  selectedItem: Service_prod = new Service_prod();

  constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location: Location) { }

  ngOnInit(): void {
    this.searchModel.START_ROW = 0;

    this._params_Get_Business_By_OWNER_ID.OWNER_ID = 1;
    this.Get_Business_By_OWNER_ID_Subscription = this.proxy.Get_Business_By_OWNER_ID(this._params_Get_Business_By_OWNER_ID).subscribe(result => this.BusinessList = result);

    this._params_Get_Sub_category_By_OWNER_ID.OWNER_ID = 1;
    this.Get_Sub_category_By_OWNER_ID_Subscription = this.proxy.Get_Sub_category_By_OWNER_ID(this._params_Get_Sub_category_By_OWNER_ID).subscribe(result => this.Sub_categoryList = result);

    this._params_Get_Category_By_OWNER_ID.OWNER_ID = 1;
    this.Get_Category_By_OWNER_ID_Subscription = this.proxy.Get_Category_By_OWNER_ID(this._params_Get_Category_By_OWNER_ID).subscribe(result => this.CategoryList = result);


    this.fetchData();
  }
  ngOnDestroy(): void {
    this.Get_Service_prod_By_Where_Subscription.unsubscribe();
    this.Get_Business_By_OWNER_ID_Subscription.unsubscribe();
    this.Get_Sub_category_By_OWNER_ID_Subscription.unsubscribe();
    this.Get_Sub_category_By_CATEGORY_ID_Subscription.unsubscribe();
    this.Get_Category_By_OWNER_ID_Subscription.unsubscribe();

  }
  ClearAndFetch() {
    this.data = [];
    this.searchModel.START_ROW = 0;
    this.fetchData();
  }
  fetchData() {
    this.searchModel.END_ROW = this.searchModel.START_ROW! + 10;
    this.Get_Service_prod_By_Where_Subscription = this.proxy.Get_Service_prod_By_Where_Adv(this.searchModel).subscribe(result => {
      if (result != null) {
        result.My_Result.forEach((element: any) => {
          this.data.push(element);
        });
      }
    });
  }
  AddEntry() {
    if (this.data !== undefined) {
      if (this.data.filter(e => e.SERVICE_PROD_ID === -1).length > 0) {
        return;
      }
    }
    const record = new Service_prod();
    record.SERVICE_PROD_ID = -1;
    this.data.unshift(record);
  }
  Edit(current: Service_prod) {
    this.proxy.Edit_Service_prod(current).subscribe((result) => {
      if (result != null) {
        this.CmSvc.ShowMessage('Done');
        if (current.SERVICE_PROD_ID === -1) {
          this.data.splice(this.data.indexOf(current), 1);
          const newEntry: any = result;
          newEntry.MyUploadedImages = [];
          newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_SERVICE_PROD]&REL_FIELD=SERVICE_PROD_IMAGE&REL_KEY=' + newEntry.SERVICE_PROD_ID;
          this.data.unshift(newEntry);
          this.ClearAndFetch();
        }
      }
    });
  }
  Delete(entry: Service_prod) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        const _params_Delete_Service_prod = new Params_Delete_Service_prod();
        _params_Delete_Service_prod.SERVICE_PROD_ID = entry.SERVICE_PROD_ID;
        this.proxy.Delete_Service_prod(_params_Delete_Service_prod).subscribe(data => {
          if (data === '') {
            this.data.splice(this.data.indexOf(entry), 1);
          }
        });
      }
    });
  }

  fetchSubCat(catID: any) {
    this.Sub_categoryList = [];
    this._params_Get_Sub_category_By_CATEGORY_ID.CATEGORY_ID = catID;
    this.Get_Sub_category_By_CATEGORY_ID_Subscription = this.proxy.Get_Sub_category_By_CATEGORY_ID(this._params_Get_Sub_category_By_CATEGORY_ID).subscribe(result => this.Sub_categoryList = result);

  }
  onScroll() {
    this.searchModel.START_ROW = this.searchModel.START_ROW! + 10;
    this.fetchData();
  }
  goBack() {
    this.location.back();
  }

  selectItem(service: Service_prod) {
    if (this.selectedItem != service) {
      this.selectedItem = service;
    } else {
      this.selectedItem = {} as Service_prod;
    }
  }
}
