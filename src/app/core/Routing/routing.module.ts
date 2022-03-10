import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { LogoutComponent } from '../../components/logout/logout.component';
import { CanActivateThisRoute } from '../Guard/RouterGuard';
import { MenuComponent } from '../../components/menu/menu.component';
import { CurrencyComponent } from 'src/app/components/currency/currency.component';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { ClientComponent } from 'src/app/components/client/client.component';
import { CoordinatesComponent } from 'src/app/components/coordinates/coordinates.component';
import { BusinessComponent } from 'src/app/components/business/business.component';
import { BookingComponent } from 'src/app/components/booking/booking.component';
import { Boost_listingComponent } from 'src/app/components/boost_listing/boost_listing.component';
import { Boost_pricingComponent } from 'src/app/components/boost_pricing/boost_pricing.component';
import { CategoryComponent } from 'src/app/components/category/category.component';
import { Sub_categoryComponent } from 'src/app/components/sub_category/sub_category.component';
import { FeedbackComponent } from 'src/app/components/feedback/feedback.component';
import { Service_prodComponent } from 'src/app/components/service_prod/service_prod.component';
import { StatusComponent } from 'src/app/components/status/status.component';
import { Work_areaComponent } from 'src/app/components/work_area/work_area.component';
import { TestComponent } from 'src/app/components/test/test.component';
import { Work_listComponent } from 'src/app/components/work_list/work_list.component';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'currency', component: CurrencyComponent,canActivate: [CanActivateThisRoute]},
    {path: 'admin', component: AdminComponent,canActivate: [CanActivateThisRoute]},
    {path: 'client', component: ClientComponent,canActivate: [CanActivateThisRoute]},
    {path: 'business', component: BusinessComponent,canActivate: [CanActivateThisRoute]},
    {path: 'booking', component: BookingComponent,canActivate: [CanActivateThisRoute]},
    {path: 'boost-listing', component: Boost_listingComponent,canActivate: [CanActivateThisRoute]},
    {path: 'boost-pricing', component: Boost_pricingComponent,canActivate: [CanActivateThisRoute]},
    {path: 'category', component: CategoryComponent,canActivate: [CanActivateThisRoute]},
    {path: 'sub-category', component: Sub_categoryComponent,canActivate: [CanActivateThisRoute]},
    {path: 'coordinates', component: CoordinatesComponent,canActivate: [CanActivateThisRoute]},
    {path: 'feedback', component: FeedbackComponent,canActivate: [CanActivateThisRoute]},
    {path: 'status', component: StatusComponent,canActivate: [CanActivateThisRoute]},
    {path: 'work-area', component: Work_areaComponent,canActivate: [CanActivateThisRoute]},
    {path: 'service-prod', component: Service_prodComponent,canActivate: [CanActivateThisRoute]},
    {path: 'menu', component: MenuComponent, canActivate: [CanActivateThisRoute]},
    {path: 'work_list', component: Work_listComponent, canActivate: [CanActivateThisRoute]},
    {path: 'test', component: TestComponent, canActivate: [CanActivateThisRoute]},
    {path: '**', component: LoginComponent}
  ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})
export class RoutingModule {}
