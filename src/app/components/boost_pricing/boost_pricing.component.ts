import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
  Proxy,
  Boost_pricing,
  Params_Get_Boost_pricing_By_OWNER_ID,
  Params_Delete_Boost_pricing,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
  selector: 'app-boost_pricing',
  templateUrl: './boost_pricing.component.html',
  styleUrls: ['./boost_pricing.component.css']
})
export class Boost_pricingComponent implements OnInit, OnDestroy {
  Get_Boost_pricing_By_OWNER_ID_Subscription = new Subscription();
  searchModel: Params_Get_Boost_pricing_By_OWNER_ID = new Params_Get_Boost_pricing_By_OWNER_ID();
  data: Boost_pricing[] = [];


  constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location: Location) { }

  ngOnInit(): void {


    this.fetchData();
  }
  ngOnDestroy(): void {
    this.Get_Boost_pricing_By_OWNER_ID_Subscription.unsubscribe();

  }



  fetchData() {
    this.searchModel.OWNER_ID = 1;
    this.Get_Boost_pricing_By_OWNER_ID_Subscription = this.proxy.Get_Boost_pricing_By_OWNER_ID(this.searchModel).subscribe(result => {
      if (result != null) {
        result.forEach((element: any) => {
          this.data.push(element);
        });
      }
    });
  }
  AddEntry() {
    if (this.data !== undefined) {
      if (this.data.filter(e => e.BOOST_PRICING_ID === -1).length > 0) {
        return;
      }
    }
    const record = new Boost_pricing();
    record.BOOST_PRICING_ID = -1;
    this.data.unshift(record);
  }
  Edit(current: Boost_pricing) {
    this.proxy.Edit_Boost_pricing(current).subscribe((result) => {
      if (result != null) {
        this.CmSvc.ShowMessage('Done');
        if (current.BOOST_PRICING_ID === -1) {
          this.data.splice(this.data.indexOf(current), 1);
          const newEntry: any = result;
          this.data.unshift(newEntry);
        }
      }
    });

  }
  Delete(entry: Boost_pricing) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe((response: any) => {
      if (response) {
        const _params_Delete_Boost_pricing = new Params_Delete_Boost_pricing();
        _params_Delete_Boost_pricing.BOOST_PRICING_ID = entry.BOOST_PRICING_ID;
        this.proxy.Delete_Boost_pricing(_params_Delete_Boost_pricing).subscribe(data => {
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
