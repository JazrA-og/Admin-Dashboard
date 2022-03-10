import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonService } from "../../core/services/common.service";
// import { setTestabilityGetter } from "@angular/core/src/testability/testability";
import { Router } from "@angular/router";
import {
  Proxy,
} from "../../core/services/proxy.service";
import { TranslateService } from "@ngx-translate/core";
import { LocalStorageService } from "src/app/core/services/local-storage.service";
import { SaveCredentialsService } from "src/app/core/services/save-credentials.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit,OnDestroy {

  loading = false;
  model: any = {};
  constructor(
    private proxy: Proxy,
    private CmSvc: CommonService,
    private router: Router,
    private translate: TranslateService,
    private saveCred: SaveCredentialsService
  ) {
    this.model = {};
    this.model.USERNAME = "";
    this.model.PASSWORD = "";
  }
  ngOnDestroy(): void {
  }


  ngOnInit() { }
  // login() {
  //   this.loading = true;
  //   this.CmSvc.Is_Logged_In.next(true);
  //   this.router.navigate(["/menu"]);

  // }

  login() {

    this.loading = true;

    this.proxy.Authenticate(this.model).subscribe(result => {
      this.loading = false;


      this.CmSvc.ShowMessage("Login Successfull");
      if (!result) {
        this.CmSvc.ShowMessage("Invalid User and/or password");
      } else {
        if (result.USER_TYPE_CODE == "001" || result.USER_TYPE_CODE == "004" ) {

          // -------------------------
          // this.CmSvc.ticket = result.Ticket;
          this.saveCred.setCredentials(result);
          this.CmSvc.Is_Logged_In.next(true);
          this.router.navigate(["/menu"]);
          // --------------------------
        } else {
          this.CmSvc.ShowMessage("You don't have permission to login");
        }
      }
    });
  }
}


