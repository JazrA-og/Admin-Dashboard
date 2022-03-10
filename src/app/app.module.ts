import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ImageUploadModule } from 'angular2-image-upload';
// import { AgmCoreModule } from '@agm/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { CanActivateThisRoute } from './core/Guard/RouterGuard';
import { MaterialModule } from './core/Material/material.module';
import { RoutingModule } from './core/Routing/routing.module';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { MyHttpInterceptor } from './core/Interceptor/interceptor.service';
// import { DirectionsMapDirective } from './core/Directives/DirectionsMapDirective';
import { MenuComponent } from './components/menu/menu.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CurrencyComponent } from './components/currency/currency.component';
import { CommonService } from './core/services/common.service';
import { SignalRService } from './core/services/SignalRService';
import { Proxy } from './core/services/proxy.service';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import { UserComponent } from './components/user/user.component';
import { CoordinatesComponent } from './components/coordinates/coordinates.component';
import { BusinessComponent } from './components/business/business.component';
import { BookingComponent } from './components/booking/booking.component';
import { Boost_listingComponent } from './components/boost_listing/boost_listing.component';
import { Boost_pricingComponent } from './components/boost_pricing/boost_pricing.component';
import { CategoryComponent } from './components/category/category.component';
import { Sub_categoryComponent } from './components/sub_category/sub_category.component';
import { StatusComponent } from './components/status/status.component';
import { Service_prodComponent } from './components/service_prod/service_prod.component';
import { Work_areaComponent } from './components/work_area/work_area.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LocalStorageService } from './core/services/local-storage.service';
import { TestComponent } from './components/test/test.component';
import { AdminDetailsComponent } from './components/admin-details/admin-details.component';
import { Work_listComponent } from './components/work_list/work_list.component';



export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    DeleteConfirmationComponent,
    MenuComponent,
    CurrencyComponent,
    AdminComponent,
    ClientComponent,
    UserComponent,
    CoordinatesComponent,
    BusinessComponent,
    BookingComponent,
    Boost_listingComponent,
    Boost_pricingComponent,
    CategoryComponent,
    Sub_categoryComponent,
    StatusComponent,
    Service_prodComponent,
    Work_areaComponent,
    FeedbackComponent,
    TestComponent,
    AdminDetailsComponent,
    Work_listComponent

  ],
  entryComponents: [DeleteConfirmationComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    FlexLayoutModule,
    InfiniteScrollModule,
    ImageUploadModule.forRoot(),
    MatDialogModule,
    MatFormFieldModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyCkBsM4-NKYM-ivEHOLrFJCxL00fhcQsMY'
    // }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    Proxy,
    CommonService,
    CanActivateThisRoute,
    LocalStorageService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true,
    },
    SignalRService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
