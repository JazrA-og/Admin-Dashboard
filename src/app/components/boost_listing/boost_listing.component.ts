import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
  Proxy,
  Boost_listing,
  Params_Get_Boost_listing_By_Where,
  Params_Delete_Boost_listing,
  Service_prod,
  Params_Get_Service_prod_By_OWNER_ID,
  Boost_pricing,
  Params_Get_Business_By_BUSINESS_ID,
  Params_Get_Boost_pricing_By_OWNER_ID,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
  selector: 'app-boost_listing',
  templateUrl: './boost_listing.component.html',
  styleUrls: ['./boost_listing.component.css']
})
export class Boost_listingComponent implements OnInit, OnDestroy {
  Get_Boost_listing_By_Where_Subscription = new Subscription();
  searchModel: Params_Get_Boost_listing_By_Where = new Params_Get_Boost_listing_By_Where();
  data: Boost_listing[] = [];

  Service_prodList!: Service_prod[];
  _params_Get_Service_prod_By_OWNER_ID = new Params_Get_Service_prod_By_OWNER_ID();
  Get_Service_prod_By_OWNER_ID_Subscription = new Subscription();

  Boost_pricingList!: Boost_pricing[];
  _params_Get_Boost_pricing_By_OWNER_ID = new Params_Get_Boost_pricing_By_OWNER_ID();
  Get_Boost_pricing_By_OWNER_ID_Subscription = new Subscription();

  public isCollapsed = false;
  selectedItem: Boost_listing = new Boost_listing();

  i_Params_Get_Business_By_BUSINESS_ID = new Params_Get_Business_By_BUSINESS_ID();
  Get_Business_By_BUSINESS_ID_Subscription = new Subscription();

  filterModel: any;

  constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location: Location) { }

  ngOnInit(): void {
    this.searchModel.START_ROW = 0;

    this._params_Get_Service_prod_By_OWNER_ID.OWNER_ID = 1;
    this.Get_Service_prod_By_OWNER_ID_Subscription = this.proxy.Get_Service_prod_By_OWNER_ID(this._params_Get_Service_prod_By_OWNER_ID).subscribe(result => {
      result.forEach((element) => {
        this.i_Params_Get_Business_By_BUSINESS_ID.BUSINESS_ID = element.BUSINESS_ID;
        this.Get_Business_By_BUSINESS_ID_Subscription = this.proxy.Get_Business_By_BUSINESS_ID(this.i_Params_Get_Business_By_BUSINESS_ID).subscribe(
          (e) => {
            element.My_Business = e;
          }
        )
      })
      this.Service_prodList = result;
    });

    this._params_Get_Boost_pricing_By_OWNER_ID.OWNER_ID = 1;
    this.Get_Boost_pricing_By_OWNER_ID_Subscription = this.proxy.Get_Boost_pricing_By_OWNER_ID(this._params_Get_Boost_pricing_By_OWNER_ID).subscribe((result) => {
      if (result != null) {
        this.Boost_pricingList = result
      }
    });


    this.fetchData();
  }
  ngOnDestroy(): void {
    this.Get_Boost_listing_By_Where_Subscription.unsubscribe();
    this.Get_Service_prod_By_OWNER_ID_Subscription.unsubscribe();
    this.Get_Boost_pricing_By_OWNER_ID_Subscription.unsubscribe();
    this.Get_Business_By_BUSINESS_ID_Subscription.unsubscribe();

  }
  ClearAndFetch() {
    this.data = [];
    this.searchModel.START_ROW = 0;
    this.fetchData();
  }
  fetchData() {
    this.searchModel.END_ROW = this.searchModel.START_ROW! + 10;
    this.Get_Boost_listing_By_Where_Subscription = this.proxy.Get_Boost_listing_By_Where_Adv(this.searchModel).subscribe(result => {
      if (result != null) {
        result.My_Result.forEach((element: any) => {

          this.data.push(element);
        });
      }
    });
  }
  AddEntry() {
    if (this.data !== undefined) {
      if (this.data.filter(e => e.BOOST_LISTING_ID === -1).length > 0) {
        return;
      }
    }
    const record = new Boost_listing();
    record.BOOST_LISTING_ID = -1;
    record.IS_ACTIVE = false;
    record.IS_PAID = false;
    this.data.unshift(record);
  }
  Edit(current: Boost_listing) {
    this.proxy.Edit_Boost_listing(current).subscribe((result) => {
      if (result != null) {
        this.CmSvc.ShowMessage('Done');
        if (current.BOOST_LISTING_ID === -1) {
          this.data.splice(this.data.indexOf(current), 1);
          const newEntry: any = result;
          newEntry.MyUploadedImages = [];
          newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_BOOST_LISTING]&REL_FIELD=BOOST_LISTING_IMAGE&REL_KEY=' + newEntry.BOOST_LISTING_ID;
          this.data.unshift(newEntry);
        }
      }
    });
  }
  Delete(entry: Boost_listing) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        const _params_Delete_Boost_listing = new Params_Delete_Boost_listing();
        _params_Delete_Boost_listing.BOOST_LISTING_ID = entry.BOOST_LISTING_ID;
        this.proxy.Delete_Boost_listing(_params_Delete_Boost_listing).subscribe(data => {
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
  selectItem(admin: Boost_listing) {
    if (this.selectedItem != admin) {
      this.selectedItem = admin;
    } else {
      this.selectedItem = {} as Boost_listing;
    }
  }

  filterData() {
    this.data = [];
    if (this.filterModel != '' ) {
      this.searchModel.END_ROW = this.searchModel.START_ROW! + 10;
    this.Get_Boost_listing_By_Where_Subscription = this.proxy.Get_Boost_listing_By_Where_Adv(this.searchModel).subscribe(result => {
      if (result != null) {
        result.My_Result.forEach((element: any) => {
            if (element.My_Service_prod.NAME.toLowerCase().includes(this.filterModel.toLowerCase())) {
              this.data.push(element);
            }

        });
      }
    });
    } else {
      this.ClearAndFetch();
    }
  }
}
