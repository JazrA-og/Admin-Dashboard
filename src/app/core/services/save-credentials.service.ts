import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import {
  Proxy,
  Client,
  Business,
  Admin,
  User,
  Params_Get_Admin_By_USERNAME,
  Params_Get_Client_By_USERNAME,
  Params_Get_Business_By_USERNAME,
  Params_Get_Admin_By_ADMIN_ID,
  Params_Get_Client_By_CLIENT_ID,
  Params_Get_Business_By_BUSINESS_ID,
} from 'src/app/core/services/proxy.service';

@Injectable({
  providedIn: 'root'
})
export class SaveCredentialsService implements OnDestroy {
  private client!: any;
  private admin!: any;
  private business!: any;

  private i_Params_Get_Admin_By_USERNAME: Params_Get_Admin_By_USERNAME = new Params_Get_Admin_By_USERNAME();
  private Get_Admin_By_USERNAME_Subscription = new Subscription();
  private i_Params_Get_Client_By_USERNAME: Params_Get_Client_By_USERNAME = new Params_Get_Client_By_USERNAME();
  private Get_Client_By_USERNAME_Subscription = new Subscription();
  private i_Params_Get_Business_By_USERNAME: Params_Get_Business_By_USERNAME = new Params_Get_Business_By_USERNAME();
  private Get_Business_By_USERNAME_Subscription = new Subscription();
  private i_Params_Get_Admin_By_ADMIN_ID: Params_Get_Admin_By_ADMIN_ID = new Params_Get_Admin_By_ADMIN_ID();
  private Get_Admin_By_ADMIN_ID_Subscription = new Subscription();
  private i_Params_Get_Client_By_CLIENT_ID: Params_Get_Client_By_CLIENT_ID = new Params_Get_Client_By_CLIENT_ID();
  private Get_Client_By_CLIENT_ID_Subscription = new Subscription();
  private i_Params_Get_Business_By_BUSINESS_ID: Params_Get_Business_By_BUSINESS_ID = new Params_Get_Business_By_BUSINESS_ID();
  private Get_Business_By_BUSINESS_ID_Subscription = new Subscription();

  constructor(private proxy: Proxy,
    private LocalStorageService: LocalStorageService
  ) { }

  ngOnDestroy(): void {
    this.Get_Admin_By_USERNAME_Subscription.unsubscribe();
    this.Get_Business_By_USERNAME_Subscription.unsubscribe();
    this.Get_Client_By_USERNAME_Subscription.unsubscribe();
    this.Get_Admin_By_ADMIN_ID_Subscription.unsubscribe();
    this.Get_Business_By_BUSINESS_ID_Subscription.unsubscribe();
    this.Get_Client_By_CLIENT_ID_Subscription.unsubscribe();
  }

  private setLocalClient(username: string) {
    this.i_Params_Get_Client_By_USERNAME.USERNAME = username;
    this.Get_Client_By_USERNAME_Subscription = this.proxy.Get_Client_By_USERNAME_Adv(this.i_Params_Get_Client_By_USERNAME).subscribe(
      (result) => {
        if (result != null) {

          this.LocalStorageService.setInfo('client', result[0]);
          this.client = this.LocalStorageService.loadInfo_2('client');
        }
      }
    )
  }

  private setLocalAdmin(username: string) {
    this.i_Params_Get_Admin_By_USERNAME.USERNAME = username;
    this.Get_Admin_By_USERNAME_Subscription = this.proxy.Get_Admin_By_USERNAME(this.i_Params_Get_Admin_By_USERNAME).subscribe(
      (result) => {
        if (result != null) {

          this.LocalStorageService.setInfo('admin', result[0]);
          this.admin = this.LocalStorageService.loadInfo_2('admin');
        }
      }
    )
  }


  private setLocalBusiness(username: string) {
    this.i_Params_Get_Business_By_USERNAME.USERNAME = username;
    this.Get_Business_By_USERNAME_Subscription = this.proxy.Get_Business_By_USERNAME(this.i_Params_Get_Business_By_USERNAME).subscribe(
      (result) => {
        if (result != null) {

          this.LocalStorageService.setInfo('business', result[0]);
          this.business = this.LocalStorageService.loadInfo_2('business');
        }
      }
    )
  }

  getLocalAdmin(): Admin {
    this.admin = null;
    const data = this.LocalStorageService.loadInfo_2('admin');
    return data;
    // this.i_Params_Get_Admin_By_ADMIN_ID.ADMIN_ID = data.ADMIN_ID;
    // this.Get_Admin_By_ADMIN_ID_Subscription = this.proxy.Get_Admin_By_ADMIN_ID(this.i_Params_Get_Admin_By_ADMIN_ID).subscribe(
    //   (result) => {
    //     if (result != null) {
    //       return result;
    //     } else {
    //       return this.admin;
    //     }
    //   }
    // )
    // return this.admin;
  }

  getLocalBusiness(): Business {
    this.business = null;
    const data = this.LocalStorageService.loadInfo_2('business');
    return data;
    // this.i_Params_Get_Business_By_BUSINESS_ID.BUSINESS_ID = data.BUSINESS_ID;
    // this.Get_Business_By_BUSINESS_ID_Subscription = this.proxy.Get_Business_By_BUSINESS_ID_Adv(this.i_Params_Get_Business_By_BUSINESS_ID).subscribe(
    //   (result) => {
    //     if (result != null) {
    //       // this.business = result;
    //       return result;
    //     } else {
    //       return this.business;
    //     }
    //   }
    // )
    // return this.business;
  }

  getLocalClient(): Client {
    this.client = null;
    const data = this.LocalStorageService.loadInfo_2('client');
    return data;
    // this.i_Params_Get_Client_By_CLIENT_ID.CLIENT_ID = data.CLIENT_ID;
    // this.Get_Client_By_CLIENT_ID_Subscription = this.proxy.Get_Client_By_CLIENT_ID(this.i_Params_Get_Client_By_CLIENT_ID).subscribe(
    //   (result) => {
    //     if (result != null) {
    //       return result;
    //     } else {
    //       return this.client;
    //     }
    //   }
    // )
    // return this.client
  }

  setCredentials(user: User) {
    if (user.USER_TYPE_CODE == "001") {
      this.setLocalAdmin(user.USERNAME);
      this.setUserCode("001");
    } else if (user.USER_TYPE_CODE == "002") {
      this.setLocalClient(user.USERNAME);
    } else if (user.USER_TYPE_CODE == "003") {
      this.setLocalBusiness(user.USERNAME);
    } else if (user.USER_TYPE_CODE == "004") {
      this.setLocalAdmin(user.USERNAME);
      this.setUserCode("004");
    }
  }
  clearCredentials() {
    this.LocalStorageService.clearAllLocalStorage();
  }

  getBusinessID() {
    const data = this.getLocalBusiness();
    return data.BUSINESS_ID;
  }
  getClientID() {
    const data = this.getLocalClient()
    return data.CLIENT_ID;
  }
  getAdminID() {
    const data = this.getLocalAdmin();
    return data.ADMIN_ID;
  }

  setUserCode(code: string) {
    this.LocalStorageService.setInfo("USER_CODE", code);
  }
  getUserCode() {
    const data = this.LocalStorageService.loadInfo_2("USER_CODE");
    return data;
  }
}
