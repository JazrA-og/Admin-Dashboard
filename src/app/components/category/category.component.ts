import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
  Proxy,
  Category,
  Params_Get_Category_By_Where,
  Params_Delete_Category,
  Sub_category,
  Params_Delete_Sub_category,
  Params_Get_Sub_category_By_CATEGORY_ID

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit, OnDestroy {
  Get_Category_By_Where_Subscription = new Subscription();
  searchModel: Params_Get_Category_By_Where = new Params_Get_Category_By_Where();
  data: Category[] = [];
  Get_Sub_category_By_CATEGORY_ID_Subscription = new Subscription();
  Params_Get_Sub_category_By_CATEGORY_ID: Params_Get_Sub_category_By_CATEGORY_ID = new Params_Get_Sub_category_By_CATEGORY_ID();


  constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location: Location) { }

  ngOnInit(): void {
    this.searchModel.START_ROW = 0;



    this.fetchData();
  }
  ngOnDestroy(): void {
    this.Get_Category_By_Where_Subscription.unsubscribe();
    this.Get_Sub_category_By_CATEGORY_ID_Subscription.unsubscribe();

  }
  ClearAndFetch() {
    this.data = [];
    this.searchModel.START_ROW = 0;
    this.fetchData();
  }
  fetchData() {
    this.searchModel.END_ROW = this.searchModel.START_ROW! + 10;
    this.Get_Category_By_Where_Subscription = this.proxy.Get_Category_By_Where(this.searchModel).subscribe(result => {
      if (result != null) {
        result.My_Result.forEach((element: any) => {
          // console.log(element);
          this.Params_Get_Sub_category_By_CATEGORY_ID.CATEGORY_ID = element.CATEGORY_ID
          this.Get_Sub_category_By_CATEGORY_ID_Subscription = this.proxy.Get_Sub_category_By_CATEGORY_ID(this.Params_Get_Sub_category_By_CATEGORY_ID).subscribe(
            (e) => {
              element.My_Sub_categories = e;
            }
          )
          this.data.push(element);
        });
      }
    });
  }
  AddEntry() {
    if (this.data !== undefined) {
      if (this.data.filter(e => e.CATEGORY_ID === -1).length > 0) {
        return;
      }
    }
    const record = new Category();
    record.CATEGORY_ID = -1;
    this.data.unshift(record);
  }
  Edit(current: Category) {
    this.proxy.Edit_Category(current).subscribe((result) => {
      if (result != null) {
        this.CmSvc.ShowMessage('Done');
        if (current.CATEGORY_ID === -1) {
          this.data.splice(this.data.indexOf(current), 1);
          const newEntry: any = result;
          newEntry.MyUploadedImages = [];
          newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_CATEGORY]&REL_FIELD=CATEGORY_IMAGE&REL_KEY=' + newEntry.CATEGORY_ID;
          this.data.unshift(newEntry);
        }
      }
    });
  }
  Delete(entry: Category) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        const _params_Delete_Category = new Params_Delete_Category();
        _params_Delete_Category.CATEGORY_ID = entry.CATEGORY_ID;
        this.proxy.Delete_Category(_params_Delete_Category).subscribe(data => {
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

  Add_Sub_category(entry: Category) {
    if (entry.My_Sub_categories == null) {
      entry.My_Sub_categories = [];
    }
    // if (entry.My_Sub_categories.filter((e: { SUB_CATEGORY_ID: number; }) => e.SUB_CATEGORY_ID === -1).length > 0) {
    // return;
    // }
    const child = new Sub_category();
    child.SUB_CATEGORY_ID = -1;
    child.CATEGORY_ID = entry.CATEGORY_ID;
    entry.My_Sub_categories.unshift(child);
  }

  Edit_Sub_category(entry: Category, sub_category: Sub_category) {
    this.proxy.Edit_Sub_category(sub_category).subscribe((result) => {
      if (result != null) {
        this.CmSvc.ShowMessage('Done');
        entry.My_Sub_categories.splice(entry.My_Sub_categories.indexOf(sub_category), 1);
        const newEntry: any = result;
        entry.My_Sub_categories.unshift(newEntry);
      }
    });
  }

  Delete_Sub_category(entry: Category, sub_category: Sub_category) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent);
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        const _params_Delete_Sub_category = new Params_Delete_Sub_category();
        _params_Delete_Sub_category.SUB_CATEGORY_ID = sub_category.SUB_CATEGORY_ID;
        this.proxy.Delete_Sub_category(_params_Delete_Sub_category).subscribe(data => {
          if (data === "") {
            entry.My_Sub_categories.splice(entry.My_Sub_categories.indexOf(sub_category), 1);
          }
        });
      }
    });
  }
  goBack() {
    this.location.back();
  }
}
