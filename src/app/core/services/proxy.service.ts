import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { CommonService } from './common.service';
@Injectable()
export class Proxy {
APIBaseUrl = '';
url = '';
constructor(public api: HttpClient, private common: CommonService) {
this.APIBaseUrl = common.APIUrl;
}
Authenticate(i_Params_Authenticate: Params_Authenticate) : Observable<User> {
this.url = this.APIBaseUrl + '/Authenticate?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Authenticate>(this.url, JSON.stringify(i_Params_Authenticate), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Admin(i_Admin: Admin) : Observable<Admin> {
this.url = this.APIBaseUrl + '/Edit_Admin?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Admin>(this.url, JSON.stringify(i_Admin), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Admin;}));
}
Delete_Admin(i_Params_Delete_Admin: Params_Delete_Admin) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Admin?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Admin), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Admin_By_OWNER_ID(i_Params_Get_Admin_By_OWNER_ID: Params_Get_Admin_By_OWNER_ID) : Observable<Admin[]> {
this.url = this.APIBaseUrl + '/Get_Admin_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Admin_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Admin_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Admin_By_Where(i_Params_Get_Admin_By_Where: Params_Get_Admin_By_Where) : Observable<Result_Get_Admin_By_Where> {
this.url = this.APIBaseUrl + '/Get_Admin_By_Where?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Admin_By_Where>(this.url, JSON.stringify(i_Params_Get_Admin_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Admin_By_Where_Adv(i_Params_Get_Admin_By_Where: Params_Get_Admin_By_Where) : Observable<Result_Get_Admin_By_Where_Adv> {
this.url = this.APIBaseUrl + '/Get_Admin_By_Where_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Admin_By_Where_Adv>(this.url, JSON.stringify(i_Params_Get_Admin_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Admin_By_Criteria(i_Params_Get_Admin_By_Criteria: Params_Get_Admin_By_Criteria) : Observable<Result_Get_Admin_By_Criteria> {
this.url = this.APIBaseUrl + '/Get_Admin_By_Criteria?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Admin_By_Criteria>(this.url, JSON.stringify(i_Params_Get_Admin_By_Criteria), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Admin_By_ADMIN_ID(i_Params_Get_Admin_By_ADMIN_ID: Params_Get_Admin_By_ADMIN_ID) : Observable<Admin> {
this.url = this.APIBaseUrl + '/Get_Admin_By_ADMIN_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Admin_By_ADMIN_ID>(this.url, JSON.stringify(i_Params_Get_Admin_By_ADMIN_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Admin_By_USERNAME(i_Params_Get_Admin_By_USERNAME: Params_Get_Admin_By_USERNAME) : Observable<Admin[]> {
this.url = this.APIBaseUrl + '/Get_Admin_By_USERNAME?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Admin_By_USERNAME>(this.url, JSON.stringify(i_Params_Get_Admin_By_USERNAME), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Booking(i_Booking: Booking) : Observable<Booking> {
this.url = this.APIBaseUrl + '/Edit_Booking?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Booking>(this.url, JSON.stringify(i_Booking), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Booking;}));
}
Delete_Booking(i_Params_Delete_Booking: Params_Delete_Booking) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Booking?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Booking), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Booking_By_OWNER_ID(i_Params_Get_Booking_By_OWNER_ID: Params_Get_Booking_By_OWNER_ID) : Observable<Booking[]> {
this.url = this.APIBaseUrl + '/Get_Booking_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Booking_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Booking_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Booking_By_OWNER_ID_Adv(i_Params_Get_Booking_By_OWNER_ID: Params_Get_Booking_By_OWNER_ID) : Observable<Booking[]> {
this.url = this.APIBaseUrl + '/Get_Booking_By_OWNER_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Booking_By_OWNER_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Booking_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Booking_By_BOOKING_ID(i_Params_Get_Booking_By_BOOKING_ID: Params_Get_Booking_By_BOOKING_ID) : Observable<Booking> {
this.url = this.APIBaseUrl + '/Get_Booking_By_BOOKING_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Booking_By_BOOKING_ID>(this.url, JSON.stringify(i_Params_Get_Booking_By_BOOKING_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Booking_By_BOOKING_ID_Adv(i_Params_Get_Booking_By_BOOKING_ID: Params_Get_Booking_By_BOOKING_ID) : Observable<Booking> {
this.url = this.APIBaseUrl + '/Get_Booking_By_BOOKING_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Booking_By_BOOKING_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Booking_By_BOOKING_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Booking_By_Where(i_Params_Get_Booking_By_Where: Params_Get_Booking_By_Where) : Observable<Result_Get_Booking_By_Where> {
this.url = this.APIBaseUrl + '/Get_Booking_By_Where?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Booking_By_Where>(this.url, JSON.stringify(i_Params_Get_Booking_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Booking_By_Where_Adv(i_Params_Get_Booking_By_Where: Params_Get_Booking_By_Where) : Observable<Result_Get_Booking_By_Where_Adv> {
this.url = this.APIBaseUrl + '/Get_Booking_By_Where_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Booking_By_Where_Adv>(this.url, JSON.stringify(i_Params_Get_Booking_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Booking_By_CLIENT_ID(i_Params_Get_Booking_By_CLIENT_ID: Params_Get_Booking_By_CLIENT_ID) : Observable<Booking[]> {
this.url = this.APIBaseUrl + '/Get_Booking_By_CLIENT_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Booking_By_CLIENT_ID>(this.url, JSON.stringify(i_Params_Get_Booking_By_CLIENT_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Booking_By_CLIENT_ID_Adv(i_Params_Get_Booking_By_CLIENT_ID: Params_Get_Booking_By_CLIENT_ID) : Observable<Booking[]> {
this.url = this.APIBaseUrl + '/Get_Booking_By_CLIENT_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Booking_By_CLIENT_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Booking_By_CLIENT_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Booking_By_BUSINESS_ID(i_Params_Get_Booking_By_BUSINESS_ID: Params_Get_Booking_By_BUSINESS_ID) : Observable<Booking[]> {
this.url = this.APIBaseUrl + '/Get_Booking_By_BUSINESS_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Booking_By_BUSINESS_ID>(this.url, JSON.stringify(i_Params_Get_Booking_By_BUSINESS_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Booking_By_BUSINESS_ID_Adv(i_Params_Get_Booking_By_BUSINESS_ID: Params_Get_Booking_By_BUSINESS_ID) : Observable<Booking[]> {
this.url = this.APIBaseUrl + '/Get_Booking_By_BUSINESS_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Booking_By_BUSINESS_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Booking_By_BUSINESS_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Booking_By_SERVICE_PROD_ID_Adv(i_Params_Get_Booking_By_SERVICE_PROD_ID: Params_Get_Booking_By_SERVICE_PROD_ID) : Observable<Booking[]> {
this.url = this.APIBaseUrl + '/Get_Booking_By_SERVICE_PROD_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Booking_By_SERVICE_PROD_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Booking_By_SERVICE_PROD_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Boost_listing(i_Boost_listing: Boost_listing) : Observable<Boost_listing> {
this.url = this.APIBaseUrl + '/Edit_Boost_listing?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Boost_listing>(this.url, JSON.stringify(i_Boost_listing), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Boost_listing;}));
}
Delete_Boost_listing(i_Params_Delete_Boost_listing: Params_Delete_Boost_listing) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Boost_listing?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Boost_listing), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Boost_listing_By_OWNER_ID(i_Params_Get_Boost_listing_By_OWNER_ID: Params_Get_Boost_listing_By_OWNER_ID) : Observable<Boost_listing[]> {
this.url = this.APIBaseUrl + '/Get_Boost_listing_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Boost_listing_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Boost_listing_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Boost_listing_By_OWNER_ID_Adv(i_Params_Get_Boost_listing_By_OWNER_ID: Params_Get_Boost_listing_By_OWNER_ID) : Observable<Boost_listing[]> {
this.url = this.APIBaseUrl + '/Get_Boost_listing_By_OWNER_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Boost_listing_By_OWNER_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Boost_listing_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Boost_listing_By_BOOST_LISTING_ID(i_Params_Get_Boost_listing_By_BOOST_LISTING_ID: Params_Get_Boost_listing_By_BOOST_LISTING_ID) : Observable<Boost_listing> {
this.url = this.APIBaseUrl + '/Get_Boost_listing_By_BOOST_LISTING_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Boost_listing_By_BOOST_LISTING_ID>(this.url, JSON.stringify(i_Params_Get_Boost_listing_By_BOOST_LISTING_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Boost_listing_By_BOOST_LISTING_ID_Adv(i_Params_Get_Boost_listing_By_BOOST_LISTING_ID: Params_Get_Boost_listing_By_BOOST_LISTING_ID) : Observable<Boost_listing> {
this.url = this.APIBaseUrl + '/Get_Boost_listing_By_BOOST_LISTING_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Boost_listing_By_BOOST_LISTING_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Boost_listing_By_BOOST_LISTING_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Boost_listing_By_Where(i_Params_Get_Boost_listing_By_Where: Params_Get_Boost_listing_By_Where) : Observable<Result_Get_Boost_listing_By_Where> {
this.url = this.APIBaseUrl + '/Get_Boost_listing_By_Where?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Boost_listing_By_Where>(this.url, JSON.stringify(i_Params_Get_Boost_listing_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Boost_listing_By_Where_Adv(i_Params_Get_Boost_listing_By_Where: Params_Get_Boost_listing_By_Where) : Observable<Result_Get_Boost_listing_By_Where_Adv> {
this.url = this.APIBaseUrl + '/Get_Boost_listing_By_Where_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Boost_listing_By_Where_Adv>(this.url, JSON.stringify(i_Params_Get_Boost_listing_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Edit_Boost_pricing(i_Boost_pricing: Boost_pricing) : Observable<Boost_pricing> {
this.url = this.APIBaseUrl + '/Edit_Boost_pricing?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Boost_pricing>(this.url, JSON.stringify(i_Boost_pricing), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Boost_pricing;}));
}
Delete_Boost_pricing(i_Params_Delete_Boost_pricing: Params_Delete_Boost_pricing) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Boost_pricing?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Boost_pricing), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Boost_pricing_By_OWNER_ID(i_Params_Get_Boost_pricing_By_OWNER_ID: Params_Get_Boost_pricing_By_OWNER_ID) : Observable<Boost_pricing[]> {
this.url = this.APIBaseUrl + '/Get_Boost_pricing_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Boost_pricing_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Boost_pricing_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Boost_pricing_By_OWNER_ID_Adv(i_Params_Get_Boost_pricing_By_OWNER_ID: Params_Get_Boost_pricing_By_OWNER_ID) : Observable<Boost_pricing[]> {
this.url = this.APIBaseUrl + '/Get_Boost_pricing_By_OWNER_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Boost_pricing_By_OWNER_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Boost_pricing_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Boost_pricing_By_BOOST_PRICING_ID(i_Params_Get_Boost_pricing_By_BOOST_PRICING_ID: Params_Get_Boost_pricing_By_BOOST_PRICING_ID) : Observable<Boost_pricing> {
this.url = this.APIBaseUrl + '/Get_Boost_pricing_By_BOOST_PRICING_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Boost_pricing_By_BOOST_PRICING_ID>(this.url, JSON.stringify(i_Params_Get_Boost_pricing_By_BOOST_PRICING_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Boost_pricing_By_BOOST_PRICING_ID_Adv(i_Params_Get_Boost_pricing_By_BOOST_PRICING_ID: Params_Get_Boost_pricing_By_BOOST_PRICING_ID) : Observable<Boost_pricing> {
this.url = this.APIBaseUrl + '/Get_Boost_pricing_By_BOOST_PRICING_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Boost_pricing_By_BOOST_PRICING_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Boost_pricing_By_BOOST_PRICING_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Boost_pricing_By_Where(i_Params_Get_Boost_pricing_By_Where: Params_Get_Boost_pricing_By_Where) : Observable<Result_Get_Boost_pricing_By_Where> {
this.url = this.APIBaseUrl + '/Get_Boost_pricing_By_Where?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Boost_pricing_By_Where>(this.url, JSON.stringify(i_Params_Get_Boost_pricing_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Boost_pricing_By_Where_Adv(i_Params_Get_Boost_pricing_By_Where: Params_Get_Boost_pricing_By_Where) : Observable<Result_Get_Boost_pricing_By_Where_Adv> {
this.url = this.APIBaseUrl + '/Get_Boost_pricing_By_Where_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Boost_pricing_By_Where_Adv>(this.url, JSON.stringify(i_Params_Get_Boost_pricing_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Edit_Business(i_Business: Business) : Observable<Business> {
this.url = this.APIBaseUrl + '/Edit_Business?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Business>(this.url, JSON.stringify(i_Business), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Business;}));
}
Delete_Business(i_Params_Delete_Business: Params_Delete_Business) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Business?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Business), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Business_By_OWNER_ID(i_Params_Get_Business_By_OWNER_ID: Params_Get_Business_By_OWNER_ID) : Observable<Business[]> {
this.url = this.APIBaseUrl + '/Get_Business_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Business_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Business_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Business_By_OWNER_ID_Adv(i_Params_Get_Business_By_OWNER_ID: Params_Get_Business_By_OWNER_ID) : Observable<Business[]> {
this.url = this.APIBaseUrl + '/Get_Business_By_OWNER_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Business_By_OWNER_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Business_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Business_By_Where(i_Params_Get_Business_By_Where: Params_Get_Business_By_Where) : Observable<Result_Get_Business_By_Where> {
this.url = this.APIBaseUrl + '/Get_Business_By_Where?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Business_By_Where>(this.url, JSON.stringify(i_Params_Get_Business_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Business_By_Where_Adv(i_Params_Get_Business_By_Where: Params_Get_Business_By_Where) : Observable<Result_Get_Business_By_Where_Adv> {
this.url = this.APIBaseUrl + '/Get_Business_By_Where_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Business_By_Where_Adv>(this.url, JSON.stringify(i_Params_Get_Business_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Business_By_BUSINESS_ID(i_Params_Get_Business_By_BUSINESS_ID: Params_Get_Business_By_BUSINESS_ID) : Observable<Business> {
this.url = this.APIBaseUrl + '/Get_Business_By_BUSINESS_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Business_By_BUSINESS_ID>(this.url, JSON.stringify(i_Params_Get_Business_By_BUSINESS_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Business_By_BUSINESS_ID_Adv(i_Params_Get_Business_By_BUSINESS_ID: Params_Get_Business_By_BUSINESS_ID) : Observable<Business> {
this.url = this.APIBaseUrl + '/Get_Business_By_BUSINESS_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Business_By_BUSINESS_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Business_By_BUSINESS_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Business_By_USERNAME(i_Params_Get_Business_By_USERNAME: Params_Get_Business_By_USERNAME) : Observable<Business[]> {
this.url = this.APIBaseUrl + '/Get_Business_By_USERNAME?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Business_By_USERNAME>(this.url, JSON.stringify(i_Params_Get_Business_By_USERNAME), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Business_By_USERNAME_Adv(i_Params_Get_Business_By_USERNAME: Params_Get_Business_By_USERNAME) : Observable<Business[]> {
this.url = this.APIBaseUrl + '/Get_Business_By_USERNAME_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Business_By_USERNAME_Adv>(this.url, JSON.stringify(i_Params_Get_Business_By_USERNAME), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Category(i_Category: Category) : Observable<Category> {
this.url = this.APIBaseUrl + '/Edit_Category?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Category>(this.url, JSON.stringify(i_Category), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Category;}));
}
Delete_Category(i_Params_Delete_Category: Params_Delete_Category) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Category?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Category), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Category_By_CATEGORY_ID(i_Params_Get_Category_By_CATEGORY_ID: Params_Get_Category_By_CATEGORY_ID) : Observable<Category> {
this.url = this.APIBaseUrl + '/Get_Category_By_CATEGORY_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Category_By_CATEGORY_ID>(this.url, JSON.stringify(i_Params_Get_Category_By_CATEGORY_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Category_By_Where(i_Params_Get_Category_By_Where: Params_Get_Category_By_Where) : Observable<Result_Get_Category_By_Where> {
this.url = this.APIBaseUrl + '/Get_Category_By_Where?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Category_By_Where>(this.url, JSON.stringify(i_Params_Get_Category_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Category_By_Where_Adv(i_Params_Get_Category_By_Where: Params_Get_Category_By_Where) : Observable<Result_Get_Category_By_Where_Adv> {
this.url = this.APIBaseUrl + '/Get_Category_By_Where_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Category_By_Where_Adv>(this.url, JSON.stringify(i_Params_Get_Category_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Category_By_OWNER_ID(i_Params_Get_Category_By_OWNER_ID: Params_Get_Category_By_OWNER_ID) : Observable<Category[]> {
this.url = this.APIBaseUrl + '/Get_Category_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Category_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Category_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Category_By_OWNER_ID_Adv(i_Params_Get_Category_By_OWNER_ID: Params_Get_Category_By_OWNER_ID) : Observable<Category[]> {
this.url = this.APIBaseUrl + '/Get_Category_By_OWNER_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Category_By_OWNER_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Category_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Client(i_Client: Client) : Observable<Client> {
this.url = this.APIBaseUrl + '/Edit_Client?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Client>(this.url, JSON.stringify(i_Client), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Client;}));
}
Delete_Client(i_Params_Delete_Client: Params_Delete_Client) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Client?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Client), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Client_By_Criteria(i_Params_Get_Client_By_Criteria: Params_Get_Client_By_Criteria) : Observable<Result_Get_Client_By_Criteria> {
this.url = this.APIBaseUrl + '/Get_Client_By_Criteria?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Client_By_Criteria>(this.url, JSON.stringify(i_Params_Get_Client_By_Criteria), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Client_By_Where(i_Params_Get_Client_By_Where: Params_Get_Client_By_Where) : Observable<Result_Get_Client_By_Where> {
this.url = this.APIBaseUrl + '/Get_Client_By_Where?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Client_By_Where>(this.url, JSON.stringify(i_Params_Get_Client_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Client_By_Where_Adv(i_Params_Get_Client_By_Where: Params_Get_Client_By_Where) : Observable<Result_Get_Client_By_Where_Adv> {
this.url = this.APIBaseUrl + '/Get_Client_By_Where_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Client_By_Where_Adv>(this.url, JSON.stringify(i_Params_Get_Client_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Client_By_OWNER_ID(i_Params_Get_Client_By_OWNER_ID: Params_Get_Client_By_OWNER_ID) : Observable<Client[]> {
this.url = this.APIBaseUrl + '/Get_Client_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Client_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Client_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Client_By_CLIENT_ID(i_Params_Get_Client_By_CLIENT_ID: Params_Get_Client_By_CLIENT_ID) : Observable<Client> {
this.url = this.APIBaseUrl + '/Get_Client_By_CLIENT_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Client_By_CLIENT_ID>(this.url, JSON.stringify(i_Params_Get_Client_By_CLIENT_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Client_By_CLIENT_ID_Adv(i_Params_Get_Client_By_CLIENT_ID: Params_Get_Client_By_CLIENT_ID) : Observable<Client> {
this.url = this.APIBaseUrl + '/Get_Client_By_CLIENT_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Client_By_CLIENT_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Client_By_CLIENT_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Client_By_USERNAME(i_Params_Get_Client_By_USERNAME: Params_Get_Client_By_USERNAME) : Observable<Client[]> {
this.url = this.APIBaseUrl + '/Get_Client_By_USERNAME?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Client_By_USERNAME>(this.url, JSON.stringify(i_Params_Get_Client_By_USERNAME), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Client_By_USERNAME_Adv(i_Params_Get_Client_By_USERNAME: Params_Get_Client_By_USERNAME) : Observable<Client[]> {
this.url = this.APIBaseUrl + '/Get_Client_By_USERNAME_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Client_By_USERNAME_Adv>(this.url, JSON.stringify(i_Params_Get_Client_By_USERNAME), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Coordinates(i_Coordinates: Coordinates) : Observable<Coordinates> {
this.url = this.APIBaseUrl + '/Edit_Coordinates?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Coordinates>(this.url, JSON.stringify(i_Coordinates), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Coordinates;}));
}
Delete_Coordinates(i_Params_Delete_Coordinates: Params_Delete_Coordinates) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Coordinates?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Coordinates), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Coordinates_By_OWNER_ID(i_Params_Get_Coordinates_By_OWNER_ID: Params_Get_Coordinates_By_OWNER_ID) : Observable<Coordinates[]> {
this.url = this.APIBaseUrl + '/Get_Coordinates_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Coordinates_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Coordinates_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Coordinates_By_Where(i_Params_Get_Coordinates_By_Where: Params_Get_Coordinates_By_Where) : Observable<Result_Get_Coordinates_By_Where> {
this.url = this.APIBaseUrl + '/Get_Coordinates_By_Where?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Coordinates_By_Where>(this.url, JSON.stringify(i_Params_Get_Coordinates_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Coordinates_By_Where_Adv(i_Params_Get_Coordinates_By_Where: Params_Get_Coordinates_By_Where) : Observable<Result_Get_Coordinates_By_Where_Adv> {
this.url = this.APIBaseUrl + '/Get_Coordinates_By_Where_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Coordinates_By_Where_Adv>(this.url, JSON.stringify(i_Params_Get_Coordinates_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Edit_Currency(i_Currency: Currency) : Observable<Currency> {
this.url = this.APIBaseUrl + '/Edit_Currency?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Currency>(this.url, JSON.stringify(i_Currency), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Currency;}));
}
Delete_Currency(i_Params_Delete_Currency: Params_Delete_Currency) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Currency?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Currency), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Currency_By_Where(i_Params_Get_Currency_By_Where: Params_Get_Currency_By_Where) : Observable<Result_Get_Currency_By_Where> {
this.url = this.APIBaseUrl + '/Get_Currency_By_Where?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Currency_By_Where>(this.url, JSON.stringify(i_Params_Get_Currency_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Currency_By_OWNER_ID(i_Params_Get_Currency_By_OWNER_ID: Params_Get_Currency_By_OWNER_ID) : Observable<Currency[]> {
this.url = this.APIBaseUrl + '/Get_Currency_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Currency_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Currency_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Currency_By_CURRENCY_ID(i_Params_Get_Currency_By_CURRENCY_ID: Params_Get_Currency_By_CURRENCY_ID) : Observable<Currency> {
this.url = this.APIBaseUrl + '/Get_Currency_By_CURRENCY_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Currency_By_CURRENCY_ID>(this.url, JSON.stringify(i_Params_Get_Currency_By_CURRENCY_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Feedback(i_Feedback: Feedback) : Observable<Feedback> {
this.url = this.APIBaseUrl + '/Edit_Feedback?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Feedback>(this.url, JSON.stringify(i_Feedback), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Feedback;}));
}
Delete_Feedback(i_Params_Delete_Feedback: Params_Delete_Feedback) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Feedback?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Feedback), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Feedback_By_Where(i_Params_Get_Feedback_By_Where: Params_Get_Feedback_By_Where) : Observable<Result_Get_Feedback_By_Where> {
this.url = this.APIBaseUrl + '/Get_Feedback_By_Where?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Feedback_By_Where>(this.url, JSON.stringify(i_Params_Get_Feedback_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Feedback_By_Where_Adv(i_Params_Get_Feedback_By_Where: Params_Get_Feedback_By_Where) : Observable<Result_Get_Feedback_By_Where_Adv> {
this.url = this.APIBaseUrl + '/Get_Feedback_By_Where_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Feedback_By_Where_Adv>(this.url, JSON.stringify(i_Params_Get_Feedback_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Feedback_By_OWNER_ID(i_Params_Get_Feedback_By_OWNER_ID: Params_Get_Feedback_By_OWNER_ID) : Observable<Feedback[]> {
this.url = this.APIBaseUrl + '/Get_Feedback_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Feedback_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Feedback_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Feedback_By_FEEDBACK_ID(i_Params_Get_Feedback_By_FEEDBACK_ID: Params_Get_Feedback_By_FEEDBACK_ID) : Observable<Feedback> {
this.url = this.APIBaseUrl + '/Get_Feedback_By_FEEDBACK_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Feedback_By_FEEDBACK_ID>(this.url, JSON.stringify(i_Params_Get_Feedback_By_FEEDBACK_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Feedback_By_BOOKING_ID(i_Params_Get_Feedback_By_BOOKING_ID: Params_Get_Feedback_By_BOOKING_ID) : Observable<Feedback[]> {
this.url = this.APIBaseUrl + '/Get_Feedback_By_BOOKING_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Feedback_By_BOOKING_ID>(this.url, JSON.stringify(i_Params_Get_Feedback_By_BOOKING_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Service_prod(i_Service_prod: Service_prod) : Observable<Service_prod> {
this.url = this.APIBaseUrl + '/Edit_Service_prod?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Service_prod>(this.url, JSON.stringify(i_Service_prod), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Service_prod;}));
}
Delete_Service_prod(i_Params_Delete_Service_prod: Params_Delete_Service_prod) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Service_prod?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Service_prod), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Service_prod_By_Where(i_Params_Get_Service_prod_By_Where: Params_Get_Service_prod_By_Where) : Observable<Result_Get_Service_prod_By_Where> {
this.url = this.APIBaseUrl + '/Get_Service_prod_By_Where?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Service_prod_By_Where>(this.url, JSON.stringify(i_Params_Get_Service_prod_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Service_prod_By_Where_Adv(i_Params_Get_Service_prod_By_Where: Params_Get_Service_prod_By_Where) : Observable<Result_Get_Service_prod_By_Where_Adv> {
this.url = this.APIBaseUrl + '/Get_Service_prod_By_Where_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Service_prod_By_Where_Adv>(this.url, JSON.stringify(i_Params_Get_Service_prod_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Service_prod_By_OWNER_ID(i_Params_Get_Service_prod_By_OWNER_ID: Params_Get_Service_prod_By_OWNER_ID) : Observable<Service_prod[]> {
this.url = this.APIBaseUrl + '/Get_Service_prod_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Service_prod_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Service_prod_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Service_prod_By_SERVICE_PROD_ID(i_Params_Get_Service_prod_By_SERVICE_PROD_ID: Params_Get_Service_prod_By_SERVICE_PROD_ID) : Observable<Service_prod> {
this.url = this.APIBaseUrl + '/Get_Service_prod_By_SERVICE_PROD_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Service_prod_By_SERVICE_PROD_ID>(this.url, JSON.stringify(i_Params_Get_Service_prod_By_SERVICE_PROD_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Service_prod_By_OWNER_ID_Adv(i_Params_Get_Service_prod_By_OWNER_ID: Params_Get_Service_prod_By_OWNER_ID) : Observable<Service_prod[]> {
this.url = this.APIBaseUrl + '/Get_Service_prod_By_OWNER_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Service_prod_By_OWNER_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Service_prod_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Service_prod_By_SERVICE_PROD_ID_Adv(i_Params_Get_Service_prod_By_SERVICE_PROD_ID: Params_Get_Service_prod_By_SERVICE_PROD_ID) : Observable<Service_prod> {
this.url = this.APIBaseUrl + '/Get_Service_prod_By_SERVICE_PROD_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Service_prod_By_SERVICE_PROD_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Service_prod_By_SERVICE_PROD_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Service_prod_By_BUSINESS_ID(i_Params_Get_Service_prod_By_BUSINESS_ID: Params_Get_Service_prod_By_BUSINESS_ID) : Observable<Service_prod[]> {
this.url = this.APIBaseUrl + '/Get_Service_prod_By_BUSINESS_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Service_prod_By_BUSINESS_ID>(this.url, JSON.stringify(i_Params_Get_Service_prod_By_BUSINESS_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Service_prod_By_BUSINESS_ID_Adv(i_Params_Get_Service_prod_By_BUSINESS_ID: Params_Get_Service_prod_By_BUSINESS_ID) : Observable<Service_prod[]> {
this.url = this.APIBaseUrl + '/Get_Service_prod_By_BUSINESS_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Service_prod_By_BUSINESS_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Service_prod_By_BUSINESS_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Service_prod_By_SUB_CATEGORY_ID(i_Params_Get_Service_prod_By_SUB_CATEGORY_ID: Params_Get_Service_prod_By_SUB_CATEGORY_ID) : Observable<Service_prod[]> {
this.url = this.APIBaseUrl + '/Get_Service_prod_By_SUB_CATEGORY_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Service_prod_By_SUB_CATEGORY_ID>(this.url, JSON.stringify(i_Params_Get_Service_prod_By_SUB_CATEGORY_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Service_prod_By_SUB_CATEGORY_ID_Adv(i_Params_Get_Service_prod_By_SUB_CATEGORY_ID: Params_Get_Service_prod_By_SUB_CATEGORY_ID) : Observable<Service_prod[]> {
this.url = this.APIBaseUrl + '/Get_Service_prod_By_SUB_CATEGORY_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Service_prod_By_SUB_CATEGORY_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Service_prod_By_SUB_CATEGORY_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Status(i_Status: Status) : Observable<Status> {
this.url = this.APIBaseUrl + '/Edit_Status?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Status>(this.url, JSON.stringify(i_Status), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Status;}));
}
Delete_Status(i_Params_Delete_Status: Params_Delete_Status) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Status?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Status), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Status_By_OWNER_ID(i_Params_Get_Status_By_OWNER_ID: Params_Get_Status_By_OWNER_ID) : Observable<Status[]> {
this.url = this.APIBaseUrl + '/Get_Status_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Status_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Status_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Status_By_STATUS_ID(i_Params_Get_Status_By_STATUS_ID: Params_Get_Status_By_STATUS_ID) : Observable<Status> {
this.url = this.APIBaseUrl + '/Get_Status_By_STATUS_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Status_By_STATUS_ID>(this.url, JSON.stringify(i_Params_Get_Status_By_STATUS_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Sub_category(i_Sub_category: Sub_category) : Observable<Sub_category> {
this.url = this.APIBaseUrl + '/Edit_Sub_category?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Sub_category>(this.url, JSON.stringify(i_Sub_category), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Sub_category;}));
}
Delete_Sub_category(i_Params_Delete_Sub_category: Params_Delete_Sub_category) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Sub_category?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Sub_category), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Sub_category_By_Where(i_Params_Get_Sub_category_By_Where: Params_Get_Sub_category_By_Where) : Observable<Result_Get_Sub_category_By_Where> {
this.url = this.APIBaseUrl + '/Get_Sub_category_By_Where?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Sub_category_By_Where>(this.url, JSON.stringify(i_Params_Get_Sub_category_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Sub_category_By_Where_Adv(i_Params_Get_Sub_category_By_Where: Params_Get_Sub_category_By_Where) : Observable<Result_Get_Sub_category_By_Where_Adv> {
this.url = this.APIBaseUrl + '/Get_Sub_category_By_Where_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Sub_category_By_Where_Adv>(this.url, JSON.stringify(i_Params_Get_Sub_category_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Sub_category_By_OWNER_ID(i_Params_Get_Sub_category_By_OWNER_ID: Params_Get_Sub_category_By_OWNER_ID) : Observable<Sub_category[]> {
this.url = this.APIBaseUrl + '/Get_Sub_category_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Sub_category_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Sub_category_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Sub_category_By_OWNER_ID_Adv(i_Params_Get_Sub_category_By_OWNER_ID: Params_Get_Sub_category_By_OWNER_ID) : Observable<Sub_category[]> {
this.url = this.APIBaseUrl + '/Get_Sub_category_By_OWNER_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Sub_category_By_OWNER_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Sub_category_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Sub_category_By_CATEGORY_ID(i_Params_Get_Sub_category_By_CATEGORY_ID: Params_Get_Sub_category_By_CATEGORY_ID) : Observable<Sub_category[]> {
this.url = this.APIBaseUrl + '/Get_Sub_category_By_CATEGORY_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Sub_category_By_CATEGORY_ID>(this.url, JSON.stringify(i_Params_Get_Sub_category_By_CATEGORY_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_Work_area(i_Work_area: Work_area) : Observable<Work_area> {
this.url = this.APIBaseUrl + '/Edit_Work_area?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Work_area>(this.url, JSON.stringify(i_Work_area), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Work_area;}));
}
Delete_Work_area(i_Params_Delete_Work_area: Params_Delete_Work_area) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Work_area?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Work_area), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Work_area_By_OWNER_ID(i_Params_Get_Work_area_By_OWNER_ID: Params_Get_Work_area_By_OWNER_ID) : Observable<Work_area[]> {
this.url = this.APIBaseUrl + '/Get_Work_area_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Work_area_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Work_area_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Work_area_By_Where(i_Params_Get_Work_area_By_Where: Params_Get_Work_area_By_Where) : Observable<Result_Get_Work_area_By_Where> {
this.url = this.APIBaseUrl + '/Get_Work_area_By_Where?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Work_area_By_Where>(this.url, JSON.stringify(i_Params_Get_Work_area_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_Work_area_By_Where_Adv(i_Params_Get_Work_area_By_Where: Params_Get_Work_area_By_Where) : Observable<Result_Get_Work_area_By_Where_Adv> {
this.url = this.APIBaseUrl + '/Get_Work_area_By_Where_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Work_area_By_Where_Adv>(this.url, JSON.stringify(i_Params_Get_Work_area_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Edit_Work_list(i_Work_list: Work_list) : Observable<Work_list> {
this.url = this.APIBaseUrl + '/Edit_Work_list?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_Work_list>(this.url, JSON.stringify(i_Work_list), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Work_list;}));
}
Delete_Work_list(i_Params_Delete_Work_list: Params_Delete_Work_list) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Work_list?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Work_list), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Delete_Work_list_By_BUSINESS_ID(i_Params_Delete_Work_list_By_BUSINESS_ID: Params_Delete_Work_list_By_BUSINESS_ID) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_Work_list_By_BUSINESS_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_Work_list_By_BUSINESS_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_Work_list_By_WORK_LIST_ID(i_Params_Get_Work_list_By_WORK_LIST_ID: Params_Get_Work_list_By_WORK_LIST_ID) : Observable<Work_list> {
this.url = this.APIBaseUrl + '/Get_Work_list_By_WORK_LIST_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Work_list_By_WORK_LIST_ID>(this.url, JSON.stringify(i_Params_Get_Work_list_By_WORK_LIST_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Work_list_By_BUSINESS_ID(i_Params_Get_Work_list_By_BUSINESS_ID: Params_Get_Work_list_By_BUSINESS_ID) : Observable<Work_list[]> {
this.url = this.APIBaseUrl + '/Get_Work_list_By_BUSINESS_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Work_list_By_BUSINESS_ID>(this.url, JSON.stringify(i_Params_Get_Work_list_By_BUSINESS_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Work_list_By_WORK_AREA_ID(i_Params_Get_Work_list_By_WORK_AREA_ID: Params_Get_Work_list_By_WORK_AREA_ID) : Observable<Work_list[]> {
this.url = this.APIBaseUrl + '/Get_Work_list_By_WORK_AREA_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Work_list_By_WORK_AREA_ID>(this.url, JSON.stringify(i_Params_Get_Work_list_By_WORK_AREA_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Work_list_By_BUSINESS_ID_Adv(i_Params_Get_Work_list_By_BUSINESS_ID: Params_Get_Work_list_By_BUSINESS_ID) : Observable<Work_list[]> {
this.url = this.APIBaseUrl + '/Get_Work_list_By_BUSINESS_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Work_list_By_BUSINESS_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Work_list_By_BUSINESS_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Work_list_By_WORK_AREA_ID_Adv(i_Params_Get_Work_list_By_WORK_AREA_ID: Params_Get_Work_list_By_WORK_AREA_ID) : Observable<Work_list[]> {
this.url = this.APIBaseUrl + '/Get_Work_list_By_WORK_AREA_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Work_list_By_WORK_AREA_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Work_list_By_WORK_AREA_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Work_list_By_WORK_LIST_ID_Adv(i_Params_Get_Work_list_By_WORK_LIST_ID: Params_Get_Work_list_By_WORK_LIST_ID) : Observable<Work_list> {
this.url = this.APIBaseUrl + '/Get_Work_list_By_WORK_LIST_ID_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Work_list_By_WORK_LIST_ID_Adv>(this.url, JSON.stringify(i_Params_Get_Work_list_By_WORK_LIST_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_Work_list_By_OWNER_ID(i_Params_Get_Work_list_By_OWNER_ID: Params_Get_Work_list_By_OWNER_ID) : Observable<Work_list[]> {
this.url = this.APIBaseUrl + '/Get_Work_list_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_Work_list_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_Work_list_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Edit_User(i_User: User) : Observable<User> {
this.url = this.APIBaseUrl + '/Edit_User?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Edit_User>(this.url, JSON.stringify(i_User), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_User;}));
}
Delete_User(i_Params_Delete_User: Params_Delete_User) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_User?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_User), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
Get_User_By_Criteria(i_Params_Get_User_By_Criteria: Params_Get_User_By_Criteria) : Observable<Result_Get_User_By_Criteria> {
this.url = this.APIBaseUrl + '/Get_User_By_Criteria?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_User_By_Criteria>(this.url, JSON.stringify(i_Params_Get_User_By_Criteria), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_User_By_Where(i_Params_Get_User_By_Where: Params_Get_User_By_Where) : Observable<Result_Get_User_By_Where> {
this.url = this.APIBaseUrl + '/Get_User_By_Where?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_User_By_Where>(this.url, JSON.stringify(i_Params_Get_User_By_Where), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Get_User_By_OWNER_ID(i_Params_Get_User_By_OWNER_ID: Params_Get_User_By_OWNER_ID) : Observable<User[]> {
this.url = this.APIBaseUrl + '/Get_User_By_OWNER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_User_By_OWNER_ID>(this.url, JSON.stringify(i_Params_Get_User_By_OWNER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_User_By_USER_ID(i_Params_Get_User_By_USER_ID: Params_Get_User_By_USER_ID) : Observable<User> {
this.url = this.APIBaseUrl + '/Get_User_By_USER_ID?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_User_By_USER_ID>(this.url, JSON.stringify(i_Params_Get_User_By_USER_ID), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_SetupEntries_Per_Table(i_Params_Get_SetupEntries_Per_Table: Params_Get_SetupEntries_Per_Table) : Observable<SetupEntry[]> {
this.url = this.APIBaseUrl + '/Get_SetupEntries_Per_Table?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_SetupEntries_Per_Table>(this.url, JSON.stringify(i_Params_Get_SetupEntries_Per_Table), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response.My_Result;}));
}
Get_User_By_Criteria_Adv(i_Params_Get_User_By_Criteria: Params_Get_User_By_Criteria) : Observable<Result_Get_User_By_Criteria_Adv> {
this.url = this.APIBaseUrl + '/Get_User_By_Criteria_Adv?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<Result_Get_User_By_Criteria_Adv>(this.url, JSON.stringify(i_Params_Get_User_By_Criteria), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg); return response;}));
}
Delete_User_By_USERNAME(i_Params_Delete_User_By_USERNAME: Params_Delete_User_By_USERNAME) : Observable<string> {
this.url = this.APIBaseUrl + '/Delete_User_By_USERNAME?Ticket=' + this.common.ticket;
const headers = new HttpHeaders({ 'Content-Type': 'application/json','ticket': this.common.ticket });
const options = { headers: headers };
return this.api.post<any>(this.url, JSON.stringify(i_Params_Delete_User_By_USERNAME), options)
.pipe(map(response => { this.common.Handle_Exception(response.ExceptionMsg);return response.ExceptionMsg;}));
}
}
export class Params_Authenticate
{
  Username!: string;
  Password!: string;
  IsAuthenticated!: boolean;
}
export class User
{
USER_ID?: number;
OWNER_ID?: number;
  USERNAME!: string;
  PASSWORD!: string;
  USER_TYPE_CODE!: string;
IS_ACTIVE?: boolean;
  ENTRY_DATE!: string;
  My_Ticket!: string;
}
export class Admin
{
ADMIN_ID?: number;
  FIRST_NAME!: string;
  LAST_NAME!: string;
  USERNAME!: string;
  PASSWORD!: string;
  EMAIL!: string;
IS_ACTIVE?: boolean;
ENTRY_USER_ID?: number;
  ENTRY_DATE!: string;
OWNER_ID?: number;
}
export class Params_Delete_Admin
{
ADMIN_ID?: number;
}
export class Params_Get_Admin_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Admin_By_Where
{
OWNER_ID?: number;
  FIRST_NAME!: string;
  LAST_NAME!: string;
  USERNAME!: string;
  PASSWORD!: string;
  EMAIL!: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Params_Get_Admin_By_Criteria
{
OWNER_ID?: number;
  FIRST_NAME!: string;
  LAST_NAME!: string;
  USERNAME!: string;
  PASSWORD!: string;
  EMAIL!: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Params_Get_Admin_By_ADMIN_ID
{
ADMIN_ID?: number;
}
export class Params_Get_Admin_By_USERNAME
{
  USERNAME!: string;
}
export class Booking
{
BOOKING_ID?: number;
SERVICE_PROD_ID?: number;
CLIENT_ID?: number;
BUSINESS_ID?: number;
WORK_AREA_ID?: number;
  DATE!: string;
  TOTAL_PRICE!: number;
STATUS_ID?: number;
  DESCRIPTION!: string;
ENTRY_USER_ID?: number;
  ENTRY_DATE!: string;
OWNER_ID?: number;
  My_Service_prod!: Service_prod;
  My_Client!: Client;
  My_Business!: Business;
  My_Work_area!: Work_area;
  My_Status!: Status;
  My_Feedbacks!: Feedback[];
}
export class Service_prod
{
SERVICE_PROD_ID?: number;
BUSINESS_ID?: number;
SUB_CATEGORY_ID?: number;
  NAME!: string;
  PRICE!: number;
  PROFIT_PERCENTAGE!: number;
IS_BOOSTED?: boolean;
  DESCRIPTION!: string;
ENTRY_USER_ID?: number;
  ENTRY_DATE!: string;
OWNER_ID?: number;
  My_Business!: Business;
  My_Sub_category!: Sub_category;
}
export class Client
{
CLIENT_ID?: number;
  FIRST_NAME!: string;
  LAST_NAME!: string;
  USERNAME!: string;
  PASSWORD!: string;
PHONE_NUMBER?: number;
  EMAIL!: string;
IS_ACTIVE?: boolean;
IS_VERIFIED?: boolean;
ENTRY_USER_ID?: number;
  ENTRY_DATE!: string;
OWNER_ID?: number;
}
export class Business
{
BUSINESS_ID?: number;
  NAME!: string;
  USERNAME!: string;
  PASSWORD!: string;
  EMAIL!: string;
PHONE_NUMBER?: number;
INTERVENTION_TIME?: number;
  MINIMUM_COST!: number;
IS_VALIDATED?: boolean;
IS_CHECKMARK?: boolean;
IS_ACTIVE?: boolean;
IS_BOOSTED?: boolean;
  DESCRIPTION!: string;
ENTRY_USER_ID?: number;
  ENTRY_DATE!: string;
OWNER_ID?: number;
  My_Work_areas!: Work_area[];
  My_Work_lists!: Work_list[];
}
export class Work_area
{
WORK_AREA_ID?: number;
  NAME!: string;
  DESCRIPTION!: string;
ENTRY_USER_ID?: number;
  ENTRY_DATE!: string;
OWNER_ID?: number;
}
export class Status
{
STATUS_ID?: number;
  NAME!: string;
  DESCRIPTION!: string;
ENTRY_USER_ID?: number;
  ENTRY_DATE!: string;
OWNER_ID?: number;
}
export class Feedback
{
FEEDBACK_ID?: number;
BOOKING_ID?: number;
  COMMENT!: string;
RATING?: number;
  DATE!: string;
  TIME!: string;
  DESCRIPTION!: string;
ENTRY_USER_ID?: number;
  ENTRY_DATE!: string;
OWNER_ID?: number;
  My_Booking!: Booking;
}
export class Params_Delete_Booking
{
BOOKING_ID?: number;
}
export class Params_Get_Booking_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Booking_By_BOOKING_ID
{
BOOKING_ID?: number;
}
export class Params_Get_Booking_By_Where
{
OWNER_ID?: number;
  DESCRIPTION!: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Params_Get_Booking_By_CLIENT_ID
{
CLIENT_ID?: number;
}
export class Params_Get_Booking_By_BUSINESS_ID
{
BUSINESS_ID?: number;
}
export class Params_Get_Booking_By_SERVICE_PROD_ID
{
SERVICE_PROD_ID?: number;
}
export class Boost_listing
{
BOOST_LISTING_ID?: number;
SERVICE_PROD_ID?: number;
BOOST_PRICING_ID?: number;
  START_DATE!: string;
  START_TIME!: string;
IS_ACTIVE?: boolean;
IS_PAID?: boolean;
IS_COMPLETED?: boolean;
  DESCRIPTION!: string;
ENTRY_USER_ID?: number;
  ENTRY_DATE!: string;
OWNER_ID?: number;
  My_Service_prod!: Service_prod;
  My_Boost_pricing!: Boost_pricing;
}
export class Params_Delete_Boost_listing
{
BOOST_LISTING_ID?: number;
}
export class Params_Get_Boost_listing_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Boost_listing_By_BOOST_LISTING_ID
{
BOOST_LISTING_ID?: number;
}
export class Params_Get_Boost_listing_By_Where
{
OWNER_ID?: number;
  DESCRIPTION!: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Boost_pricing
{
BOOST_PRICING_ID?: number;
  NAME!: string;
MINUTE?: number;
PRICE_PER_MINUTE?: number;
TOTAL_PRICE?: number;
  DESCRIPTION!: string;
ENTRY_USER_ID?: number;
  ENTRY_DATE!: string;
OWNER_ID?: number;
}
export class Params_Delete_Boost_pricing
{
BOOST_PRICING_ID?: number;
}
export class Params_Get_Boost_pricing_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Boost_pricing_By_BOOST_PRICING_ID
{
BOOST_PRICING_ID?: number;
}
export class Params_Get_Boost_pricing_By_Where
{
OWNER_ID?: number;
  NAME!: string;
  DESCRIPTION!: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Params_Delete_Business
{
BUSINESS_ID?: number;
}
export class Params_Get_Business_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Business_By_Where
{
OWNER_ID?: number;
  NAME!: string;
  USERNAME!: string;
  PASSWORD!: string;
  EMAIL!: string;
  DESCRIPTION!: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Params_Get_Business_By_BUSINESS_ID
{
BUSINESS_ID?: number;
}
export class Params_Get_Business_By_USERNAME
{
  USERNAME!: string;
}
export class Category
{
CATEGORY_ID?: number;
  NAME!: string;
  DESCRIPTION!: string;
ENTRY_USER_ID?: number;
  ENTRY_DATE!: string;
OWNER_ID?: number;
  My_Sub_categories!: Sub_category[];
}
export class Sub_category
{
SUB_CATEGORY_ID?: number;
CATEGORY_ID?: number;
  NAME!: string;
  DESCRIPTION!: string;
ENTRY_USER_ID?: number;
  ENTRY_DATE!: string;
OWNER_ID?: number;
  My_Category!: Category;
}
export class Params_Delete_Category
{
CATEGORY_ID?: number;
}
export class Params_Get_Category_By_CATEGORY_ID
{
CATEGORY_ID?: number;
}
export class Params_Get_Category_By_Where
{
OWNER_ID?: number;
  NAME!: string;
  DESCRIPTION!: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Params_Get_Category_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Delete_Client
{
CLIENT_ID?: number;
}
export class Params_Get_Client_By_Criteria
{
OWNER_ID?: number;
  FIRST_NAME!: string;
  LAST_NAME!: string;
  USERNAME!: string;
  PASSWORD!: string;
  EMAIL!: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Params_Get_Client_By_Where
{
OWNER_ID?: number;
  FIRST_NAME!: string;
  LAST_NAME!: string;
  USERNAME!: string;
  PASSWORD!: string;
  EMAIL!: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Params_Get_Client_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Client_By_CLIENT_ID
{
CLIENT_ID?: number;
}
export class Params_Get_Client_By_USERNAME
{
  USERNAME!: string;
}
export class Coordinates
{
COORDINATES_ID?: number;
BOOKING_ID?: number;
  LONGITUDE!: string;
  LATITUDE!: string;
  DESCRIPTION!: string;
ENTRY_USER_ID?: number;
  ENTRY_DATE!: string;
OWNER_ID?: number;
  My_Booking!: Booking;
}
export class Params_Delete_Coordinates
{
COORDINATES_ID?: number;
}
export class Params_Get_Coordinates_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Coordinates_By_Where
{
OWNER_ID?: number;
  LONGITUDE!: string;
  LATITUDE!: string;
  DESCRIPTION!: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Currency
{
CURRENCY_ID?: number;
  NAME!: string;
  SYMBOL!: string;
  ACRONYM!: string;
  DESCRIPTION!: string;
ENTRY_USER_ID?: number;
  ENTRY_DATE!: string;
OWNER_ID?: number;
}
export class Params_Delete_Currency
{
CURRENCY_ID?: number;
}
export class Params_Get_Currency_By_Where
{
OWNER_ID?: number;
  NAME!: string;
  SYMBOL!: string;
  ACRONYM!: string;
  DESCRIPTION!: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Params_Get_Currency_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Currency_By_CURRENCY_ID
{
CURRENCY_ID?: number;
}
export class Params_Delete_Feedback
{
FEEDBACK_ID?: number;
}
export class Params_Get_Feedback_By_Where
{
OWNER_ID?: number;
  COMMENT!: string;
  DESCRIPTION!: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Params_Get_Feedback_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Feedback_By_FEEDBACK_ID
{
FEEDBACK_ID?: number;
}
export class Params_Get_Feedback_By_BOOKING_ID
{
BOOKING_ID?: number;
}
export class Params_Delete_Service_prod
{
SERVICE_PROD_ID?: number;
}
export class Params_Get_Service_prod_By_Where
{
OWNER_ID?: number;
  NAME!: string;
  DESCRIPTION!: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Params_Get_Service_prod_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Service_prod_By_SERVICE_PROD_ID
{
SERVICE_PROD_ID?: number;
}
export class Params_Get_Service_prod_By_BUSINESS_ID
{
BUSINESS_ID?: number;
}
export class Params_Get_Service_prod_By_SUB_CATEGORY_ID
{
SUB_CATEGORY_ID?: number;
}
export class Params_Delete_Status
{
STATUS_ID?: number;
}
export class Params_Get_Status_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Status_By_STATUS_ID
{
STATUS_ID?: number;
}
export class Params_Delete_Sub_category
{
SUB_CATEGORY_ID?: number;
}
export class Params_Get_Sub_category_By_Where
{
OWNER_ID?: number;
  NAME!: string;
  DESCRIPTION!: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Params_Get_Sub_category_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Sub_category_By_CATEGORY_ID
{
CATEGORY_ID?: number;
}
export class Params_Delete_Work_area
{
WORK_AREA_ID?: number;
}
export class Params_Get_Work_area_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_Work_area_By_Where
{
OWNER_ID?: number;
  NAME!: string;
  DESCRIPTION!: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Work_list
{
WORK_LIST_ID?: number;
BUSINESS_ID?: number;
WORK_AREA_ID?: number;
IS_TRUE?: boolean;
  DESCRIPTION!: string;
ENTRY_USER_ID?: number;
  ENTRY_DATE!: string;
OWNER_ID?: number;
  My_Business!: Business;
  My_Work_area!: Work_area;
}
export class Params_Delete_Work_list
{
WORK_LIST_ID?: number;
}
export class Params_Delete_Work_list_By_BUSINESS_ID
{
BUSINESS_ID?: number;
}
export class Params_Get_Work_list_By_WORK_LIST_ID
{
WORK_LIST_ID?: number;
}
export class Params_Get_Work_list_By_BUSINESS_ID
{
BUSINESS_ID?: number;
}
export class Params_Get_Work_list_By_WORK_AREA_ID
{
WORK_AREA_ID?: number;
}
export class Params_Get_Work_list_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Delete_User
{
USER_ID?: number;
}
export class Params_Get_User_By_Criteria
{
OWNER_ID?: number;
  USERNAME!: string;
  PASSWORD!: string;
  USER_TYPE_CODE!: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Params_Get_User_By_Where
{
OWNER_ID?: number;
  USERNAME!: string;
  PASSWORD!: string;
  USER_TYPE_CODE!: string;
START_ROW?: number;
END_ROW?: number;
TOTAL_COUNT?: number;
}
export class Params_Get_User_By_OWNER_ID
{
OWNER_ID?: number;
}
export class Params_Get_User_By_USER_ID
{
USER_ID?: number;
}
export class Params_Get_SetupEntries_Per_Table
{
  TBL_NAME!: string;
}
export class SetupEntry
{
OWNER_ID?: number;
  TBL_NAME!: string;
  CODE_NAME!: string;
ISSYSTEM?: boolean;
ISDELETEABLE?: boolean;
ISUPDATEABLE?: boolean;
ISVISIBLE?: boolean;
ISDELETED?: boolean;
DISPLAY_ORDER?: number;
  CODE_VALUE_EN!: string;
  CODE_VALUE_FR!: string;
  CODE_VALUE_AR!: string;
  ENTRY_DATE!: string;
ENTRY_USER_ID?: number;
  NOTES!: string;
  INVARIANT_VALUE!: string;
}
export class Params_Delete_User_By_USERNAME
{
  USERNAME!: string;
}
export class Action_Result{
  ExceptionMsg!: string;
}
export class Result_Authenticate extends Action_Result {
  My_Result!: User;
  My_Params_Authenticate!: Params_Authenticate;
}
export class Result_Edit_Admin extends Action_Result {
  My_Admin!: Admin;
}
export class Result_Delete_Admin extends Action_Result {
  My_Params_Delete_Admin!: Params_Delete_Admin;
}
export class Result_Get_Admin_By_OWNER_ID extends Action_Result {
  My_Result!: Admin[];
  My_Params_Get_Admin_By_OWNER_ID!: Params_Get_Admin_By_OWNER_ID;
}
export class Result_Get_Admin_By_Where extends Action_Result {
  My_Result!: Admin[];
  My_Params_Get_Admin_By_Where!: Params_Get_Admin_By_Where;
}
export class Result_Get_Admin_By_Where_Adv extends Action_Result {
  My_Result!: Admin[];
  My_Params_Get_Admin_By_Where!: Params_Get_Admin_By_Where;
}
export class Result_Get_Admin_By_Criteria extends Action_Result {
  My_Result!: Admin[];
  My_Params_Get_Admin_By_Criteria!: Params_Get_Admin_By_Criteria;
}
export class Result_Get_Admin_By_ADMIN_ID extends Action_Result {
  My_Result!: Admin;
  My_Params_Get_Admin_By_ADMIN_ID!: Params_Get_Admin_By_ADMIN_ID;
}
export class Result_Get_Admin_By_USERNAME extends Action_Result {
  My_Result!: Admin[];
  My_Params_Get_Admin_By_USERNAME!: Params_Get_Admin_By_USERNAME;
}
export class Result_Edit_Booking extends Action_Result {
  My_Booking!: Booking;
}
export class Result_Delete_Booking extends Action_Result {
  My_Params_Delete_Booking!: Params_Delete_Booking;
}
export class Result_Get_Booking_By_OWNER_ID extends Action_Result {
  My_Result!: Booking[];
  My_Params_Get_Booking_By_OWNER_ID!: Params_Get_Booking_By_OWNER_ID;
}
export class Result_Get_Booking_By_OWNER_ID_Adv extends Action_Result {
  My_Result!: Booking[];
  My_Params_Get_Booking_By_OWNER_ID!: Params_Get_Booking_By_OWNER_ID;
}
export class Result_Get_Booking_By_BOOKING_ID extends Action_Result {
  My_Result!: Booking;
  My_Params_Get_Booking_By_BOOKING_ID!: Params_Get_Booking_By_BOOKING_ID;
}
export class Result_Get_Booking_By_BOOKING_ID_Adv extends Action_Result {
  My_Result!: Booking;
  My_Params_Get_Booking_By_BOOKING_ID!: Params_Get_Booking_By_BOOKING_ID;
}
export class Result_Get_Booking_By_Where extends Action_Result {
  My_Result!: Booking[];
  My_Params_Get_Booking_By_Where!: Params_Get_Booking_By_Where;
}
export class Result_Get_Booking_By_Where_Adv extends Action_Result {
  My_Result!: Booking[];
  My_Params_Get_Booking_By_Where!: Params_Get_Booking_By_Where;
}
export class Result_Get_Booking_By_CLIENT_ID extends Action_Result {
  My_Result!: Booking[];
  My_Params_Get_Booking_By_CLIENT_ID!: Params_Get_Booking_By_CLIENT_ID;
}
export class Result_Get_Booking_By_CLIENT_ID_Adv extends Action_Result {
  My_Result!: Booking[];
  My_Params_Get_Booking_By_CLIENT_ID!: Params_Get_Booking_By_CLIENT_ID;
}
export class Result_Get_Booking_By_BUSINESS_ID extends Action_Result {
  My_Result!: Booking[];
  My_Params_Get_Booking_By_BUSINESS_ID!: Params_Get_Booking_By_BUSINESS_ID;
}
export class Result_Get_Booking_By_BUSINESS_ID_Adv extends Action_Result {
  My_Result!: Booking[];
  My_Params_Get_Booking_By_BUSINESS_ID!: Params_Get_Booking_By_BUSINESS_ID;
}
export class Result_Get_Booking_By_SERVICE_PROD_ID_Adv extends Action_Result {
  My_Result!: Booking[];
  My_Params_Get_Booking_By_SERVICE_PROD_ID!: Params_Get_Booking_By_SERVICE_PROD_ID;
}
export class Result_Edit_Boost_listing extends Action_Result {
  My_Boost_listing!: Boost_listing;
}
export class Result_Delete_Boost_listing extends Action_Result {
  My_Params_Delete_Boost_listing!: Params_Delete_Boost_listing;
}
export class Result_Get_Boost_listing_By_OWNER_ID extends Action_Result {
  My_Result!: Boost_listing[];
  My_Params_Get_Boost_listing_By_OWNER_ID!: Params_Get_Boost_listing_By_OWNER_ID;
}
export class Result_Get_Boost_listing_By_OWNER_ID_Adv extends Action_Result {
  My_Result!: Boost_listing[];
  My_Params_Get_Boost_listing_By_OWNER_ID!: Params_Get_Boost_listing_By_OWNER_ID;
}
export class Result_Get_Boost_listing_By_BOOST_LISTING_ID extends Action_Result {
  My_Result!: Boost_listing;
  My_Params_Get_Boost_listing_By_BOOST_LISTING_ID!: Params_Get_Boost_listing_By_BOOST_LISTING_ID;
}
export class Result_Get_Boost_listing_By_BOOST_LISTING_ID_Adv extends Action_Result {
  My_Result!: Boost_listing;
  My_Params_Get_Boost_listing_By_BOOST_LISTING_ID!: Params_Get_Boost_listing_By_BOOST_LISTING_ID;
}
export class Result_Get_Boost_listing_By_Where extends Action_Result {
  My_Result!: Boost_listing[];
  My_Params_Get_Boost_listing_By_Where!: Params_Get_Boost_listing_By_Where;
}
export class Result_Get_Boost_listing_By_Where_Adv extends Action_Result {
  My_Result!: Boost_listing[];
  My_Params_Get_Boost_listing_By_Where!: Params_Get_Boost_listing_By_Where;
}
export class Result_Edit_Boost_pricing extends Action_Result {
  My_Boost_pricing!: Boost_pricing;
}
export class Result_Delete_Boost_pricing extends Action_Result {
  My_Params_Delete_Boost_pricing!: Params_Delete_Boost_pricing;
}
export class Result_Get_Boost_pricing_By_OWNER_ID extends Action_Result {
  My_Result!: Boost_pricing[];
  My_Params_Get_Boost_pricing_By_OWNER_ID!: Params_Get_Boost_pricing_By_OWNER_ID;
}
export class Result_Get_Boost_pricing_By_OWNER_ID_Adv extends Action_Result {
  My_Result!: Boost_pricing[];
  My_Params_Get_Boost_pricing_By_OWNER_ID!: Params_Get_Boost_pricing_By_OWNER_ID;
}
export class Result_Get_Boost_pricing_By_BOOST_PRICING_ID extends Action_Result {
  My_Result!: Boost_pricing;
  My_Params_Get_Boost_pricing_By_BOOST_PRICING_ID!: Params_Get_Boost_pricing_By_BOOST_PRICING_ID;
}
export class Result_Get_Boost_pricing_By_BOOST_PRICING_ID_Adv extends Action_Result {
  My_Result!: Boost_pricing;
  My_Params_Get_Boost_pricing_By_BOOST_PRICING_ID!: Params_Get_Boost_pricing_By_BOOST_PRICING_ID;
}
export class Result_Get_Boost_pricing_By_Where extends Action_Result {
  My_Result!: Boost_pricing[];
  My_Params_Get_Boost_pricing_By_Where!: Params_Get_Boost_pricing_By_Where;
}
export class Result_Get_Boost_pricing_By_Where_Adv extends Action_Result {
  My_Result!: Boost_pricing[];
  My_Params_Get_Boost_pricing_By_Where!: Params_Get_Boost_pricing_By_Where;
}
export class Result_Edit_Business extends Action_Result {
  My_Business!: Business;
}
export class Result_Delete_Business extends Action_Result {
  My_Params_Delete_Business!: Params_Delete_Business;
}
export class Result_Get_Business_By_OWNER_ID extends Action_Result {
  My_Result!: Business[];
  My_Params_Get_Business_By_OWNER_ID!: Params_Get_Business_By_OWNER_ID;
}
export class Result_Get_Business_By_OWNER_ID_Adv extends Action_Result {
  My_Result!: Business[];
  My_Params_Get_Business_By_OWNER_ID!: Params_Get_Business_By_OWNER_ID;
}
export class Result_Get_Business_By_Where extends Action_Result {
  My_Result!: Business[];
  My_Params_Get_Business_By_Where!: Params_Get_Business_By_Where;
}
export class Result_Get_Business_By_Where_Adv extends Action_Result {
  My_Result!: Business[];
  My_Params_Get_Business_By_Where!: Params_Get_Business_By_Where;
}
export class Result_Get_Business_By_BUSINESS_ID extends Action_Result {
  My_Result!: Business;
  My_Params_Get_Business_By_BUSINESS_ID!: Params_Get_Business_By_BUSINESS_ID;
}
export class Result_Get_Business_By_BUSINESS_ID_Adv extends Action_Result {
  My_Result!: Business;
  My_Params_Get_Business_By_BUSINESS_ID!: Params_Get_Business_By_BUSINESS_ID;
}
export class Result_Get_Business_By_USERNAME extends Action_Result {
  My_Result!: Business[];
  My_Params_Get_Business_By_USERNAME!: Params_Get_Business_By_USERNAME;
}
export class Result_Get_Business_By_USERNAME_Adv extends Action_Result {
  My_Result!: Business[];
  My_Params_Get_Business_By_USERNAME!: Params_Get_Business_By_USERNAME;
}
export class Result_Edit_Category extends Action_Result {
  My_Category!: Category;
}
export class Result_Delete_Category extends Action_Result {
  My_Params_Delete_Category!: Params_Delete_Category;
}
export class Result_Get_Category_By_CATEGORY_ID extends Action_Result {
  My_Result!: Category;
  My_Params_Get_Category_By_CATEGORY_ID!: Params_Get_Category_By_CATEGORY_ID;
}
export class Result_Get_Category_By_Where extends Action_Result {
  My_Result!: Category[];
  My_Params_Get_Category_By_Where!: Params_Get_Category_By_Where;
}
export class Result_Get_Category_By_Where_Adv extends Action_Result {
  My_Result!: Category[];
  My_Params_Get_Category_By_Where!: Params_Get_Category_By_Where;
}
export class Result_Get_Category_By_OWNER_ID extends Action_Result {
  My_Result!: Category[];
  My_Params_Get_Category_By_OWNER_ID!: Params_Get_Category_By_OWNER_ID;
}
export class Result_Get_Category_By_OWNER_ID_Adv extends Action_Result {
  My_Result!: Category[];
  My_Params_Get_Category_By_OWNER_ID!: Params_Get_Category_By_OWNER_ID;
}
export class Result_Edit_Client extends Action_Result {
  My_Client!: Client;
}
export class Result_Delete_Client extends Action_Result {
  My_Params_Delete_Client!: Params_Delete_Client;
}
export class Result_Get_Client_By_Criteria extends Action_Result {
  My_Result!: Client[];
  My_Params_Get_Client_By_Criteria!: Params_Get_Client_By_Criteria;
}
export class Result_Get_Client_By_Where extends Action_Result {
  My_Result!: Client[];
  My_Params_Get_Client_By_Where!: Params_Get_Client_By_Where;
}
export class Result_Get_Client_By_Where_Adv extends Action_Result {
  My_Result!: Client[];
  My_Params_Get_Client_By_Where!: Params_Get_Client_By_Where;
}
export class Result_Get_Client_By_OWNER_ID extends Action_Result {
  My_Result!: Client[];
  My_Params_Get_Client_By_OWNER_ID!: Params_Get_Client_By_OWNER_ID;
}
export class Result_Get_Client_By_CLIENT_ID extends Action_Result {
  My_Result!: Client;
  My_Params_Get_Client_By_CLIENT_ID!: Params_Get_Client_By_CLIENT_ID;
}
export class Result_Get_Client_By_CLIENT_ID_Adv extends Action_Result {
  My_Result!: Client;
  My_Params_Get_Client_By_CLIENT_ID!: Params_Get_Client_By_CLIENT_ID;
}
export class Result_Get_Client_By_USERNAME extends Action_Result {
  My_Result!: Client[];
  My_Params_Get_Client_By_USERNAME!: Params_Get_Client_By_USERNAME;
}
export class Result_Get_Client_By_USERNAME_Adv extends Action_Result {
  My_Result!: Client[];
  My_Params_Get_Client_By_USERNAME!: Params_Get_Client_By_USERNAME;
}
export class Result_Edit_Coordinates extends Action_Result {
  My_Coordinates!: Coordinates;
}
export class Result_Delete_Coordinates extends Action_Result {
  My_Params_Delete_Coordinates!: Params_Delete_Coordinates;
}
export class Result_Get_Coordinates_By_OWNER_ID extends Action_Result {
  My_Result!: Coordinates[];
  My_Params_Get_Coordinates_By_OWNER_ID!: Params_Get_Coordinates_By_OWNER_ID;
}
export class Result_Get_Coordinates_By_Where extends Action_Result {
  My_Result!: Coordinates[];
  My_Params_Get_Coordinates_By_Where!: Params_Get_Coordinates_By_Where;
}
export class Result_Get_Coordinates_By_Where_Adv extends Action_Result {
  My_Result!: Coordinates[];
  My_Params_Get_Coordinates_By_Where!: Params_Get_Coordinates_By_Where;
}
export class Result_Edit_Currency extends Action_Result {
  My_Currency!: Currency;
}
export class Result_Delete_Currency extends Action_Result {
  My_Params_Delete_Currency!: Params_Delete_Currency;
}
export class Result_Get_Currency_By_Where extends Action_Result {
  My_Result!: Currency[];
  My_Params_Get_Currency_By_Where!: Params_Get_Currency_By_Where;
}
export class Result_Get_Currency_By_OWNER_ID extends Action_Result {
  My_Result!: Currency[];
  My_Params_Get_Currency_By_OWNER_ID!: Params_Get_Currency_By_OWNER_ID;
}
export class Result_Get_Currency_By_CURRENCY_ID extends Action_Result {
  My_Result!: Currency;
  My_Params_Get_Currency_By_CURRENCY_ID!: Params_Get_Currency_By_CURRENCY_ID;
}
export class Result_Edit_Feedback extends Action_Result {
  My_Feedback!: Feedback;
}
export class Result_Delete_Feedback extends Action_Result {
  My_Params_Delete_Feedback!: Params_Delete_Feedback;
}
export class Result_Get_Feedback_By_Where extends Action_Result {
  My_Result!: Feedback[];
  My_Params_Get_Feedback_By_Where!: Params_Get_Feedback_By_Where;
}
export class Result_Get_Feedback_By_Where_Adv extends Action_Result {
  My_Result!: Feedback[];
  My_Params_Get_Feedback_By_Where!: Params_Get_Feedback_By_Where;
}
export class Result_Get_Feedback_By_OWNER_ID extends Action_Result {
  My_Result!: Feedback[];
  My_Params_Get_Feedback_By_OWNER_ID!: Params_Get_Feedback_By_OWNER_ID;
}
export class Result_Get_Feedback_By_FEEDBACK_ID extends Action_Result {
  My_Result!: Feedback;
  My_Params_Get_Feedback_By_FEEDBACK_ID!: Params_Get_Feedback_By_FEEDBACK_ID;
}
export class Result_Get_Feedback_By_BOOKING_ID extends Action_Result {
  My_Result!: Feedback[];
  My_Params_Get_Feedback_By_BOOKING_ID!: Params_Get_Feedback_By_BOOKING_ID;
}
export class Result_Edit_Service_prod extends Action_Result {
  My_Service_prod!: Service_prod;
}
export class Result_Delete_Service_prod extends Action_Result {
  My_Params_Delete_Service_prod!: Params_Delete_Service_prod;
}
export class Result_Get_Service_prod_By_Where extends Action_Result {
  My_Result!: Service_prod[];
  My_Params_Get_Service_prod_By_Where!: Params_Get_Service_prod_By_Where;
}
export class Result_Get_Service_prod_By_Where_Adv extends Action_Result {
  My_Result!: Service_prod[];
  My_Params_Get_Service_prod_By_Where!: Params_Get_Service_prod_By_Where;
}
export class Result_Get_Service_prod_By_OWNER_ID extends Action_Result {
  My_Result!: Service_prod[];
  My_Params_Get_Service_prod_By_OWNER_ID!: Params_Get_Service_prod_By_OWNER_ID;
}
export class Result_Get_Service_prod_By_SERVICE_PROD_ID extends Action_Result {
  My_Result!: Service_prod;
  My_Params_Get_Service_prod_By_SERVICE_PROD_ID!: Params_Get_Service_prod_By_SERVICE_PROD_ID;
}
export class Result_Get_Service_prod_By_OWNER_ID_Adv extends Action_Result {
  My_Result!: Service_prod[];
  My_Params_Get_Service_prod_By_OWNER_ID!: Params_Get_Service_prod_By_OWNER_ID;
}
export class Result_Get_Service_prod_By_SERVICE_PROD_ID_Adv extends Action_Result {
  My_Result!: Service_prod;
  My_Params_Get_Service_prod_By_SERVICE_PROD_ID!: Params_Get_Service_prod_By_SERVICE_PROD_ID;
}
export class Result_Get_Service_prod_By_BUSINESS_ID extends Action_Result {
  My_Result!: Service_prod[];
  My_Params_Get_Service_prod_By_BUSINESS_ID!: Params_Get_Service_prod_By_BUSINESS_ID;
}
export class Result_Get_Service_prod_By_BUSINESS_ID_Adv extends Action_Result {
  My_Result!: Service_prod[];
  My_Params_Get_Service_prod_By_BUSINESS_ID!: Params_Get_Service_prod_By_BUSINESS_ID;
}
export class Result_Get_Service_prod_By_SUB_CATEGORY_ID extends Action_Result {
  My_Result!: Service_prod[];
  My_Params_Get_Service_prod_By_SUB_CATEGORY_ID!: Params_Get_Service_prod_By_SUB_CATEGORY_ID;
}
export class Result_Get_Service_prod_By_SUB_CATEGORY_ID_Adv extends Action_Result {
  My_Result!: Service_prod[];
  My_Params_Get_Service_prod_By_SUB_CATEGORY_ID!: Params_Get_Service_prod_By_SUB_CATEGORY_ID;
}
export class Result_Edit_Status extends Action_Result {
  My_Status!: Status;
}
export class Result_Delete_Status extends Action_Result {
  My_Params_Delete_Status!: Params_Delete_Status;
}
export class Result_Get_Status_By_OWNER_ID extends Action_Result {
  My_Result!: Status[];
  My_Params_Get_Status_By_OWNER_ID!: Params_Get_Status_By_OWNER_ID;
}
export class Result_Get_Status_By_STATUS_ID extends Action_Result {
  My_Result!: Status;
  My_Params_Get_Status_By_STATUS_ID!: Params_Get_Status_By_STATUS_ID;
}
export class Result_Edit_Sub_category extends Action_Result {
  My_Sub_category!: Sub_category;
}
export class Result_Delete_Sub_category extends Action_Result {
  My_Params_Delete_Sub_category!: Params_Delete_Sub_category;
}
export class Result_Get_Sub_category_By_Where extends Action_Result {
  My_Result!: Sub_category[];
  My_Params_Get_Sub_category_By_Where!: Params_Get_Sub_category_By_Where;
}
export class Result_Get_Sub_category_By_Where_Adv extends Action_Result {
  My_Result!: Sub_category[];
  My_Params_Get_Sub_category_By_Where!: Params_Get_Sub_category_By_Where;
}
export class Result_Get_Sub_category_By_OWNER_ID extends Action_Result {
  My_Result!: Sub_category[];
  My_Params_Get_Sub_category_By_OWNER_ID!: Params_Get_Sub_category_By_OWNER_ID;
}
export class Result_Get_Sub_category_By_OWNER_ID_Adv extends Action_Result {
  My_Result!: Sub_category[];
  My_Params_Get_Sub_category_By_OWNER_ID!: Params_Get_Sub_category_By_OWNER_ID;
}
export class Result_Get_Sub_category_By_CATEGORY_ID extends Action_Result {
  My_Result!: Sub_category[];
  My_Params_Get_Sub_category_By_CATEGORY_ID!: Params_Get_Sub_category_By_CATEGORY_ID;
}
export class Result_Edit_Work_area extends Action_Result {
  My_Work_area!: Work_area;
}
export class Result_Delete_Work_area extends Action_Result {
  My_Params_Delete_Work_area!: Params_Delete_Work_area;
}
export class Result_Get_Work_area_By_OWNER_ID extends Action_Result {
  My_Result!: Work_area[];
  My_Params_Get_Work_area_By_OWNER_ID!: Params_Get_Work_area_By_OWNER_ID;
}
export class Result_Get_Work_area_By_Where extends Action_Result {
  My_Result!: Work_area[];
  My_Params_Get_Work_area_By_Where!: Params_Get_Work_area_By_Where;
}
export class Result_Get_Work_area_By_Where_Adv extends Action_Result {
  My_Result!: Work_area[];
  My_Params_Get_Work_area_By_Where!: Params_Get_Work_area_By_Where;
}
export class Result_Edit_Work_list extends Action_Result {
  My_Work_list!: Work_list;
}
export class Result_Delete_Work_list extends Action_Result {
  My_Params_Delete_Work_list!: Params_Delete_Work_list;
}
export class Result_Delete_Work_list_By_BUSINESS_ID extends Action_Result {
  My_Params_Delete_Work_list_By_BUSINESS_ID!: Params_Delete_Work_list_By_BUSINESS_ID;
}
export class Result_Get_Work_list_By_WORK_LIST_ID extends Action_Result {
  My_Result!: Work_list;
  My_Params_Get_Work_list_By_WORK_LIST_ID!: Params_Get_Work_list_By_WORK_LIST_ID;
}
export class Result_Get_Work_list_By_BUSINESS_ID extends Action_Result {
  My_Result!: Work_list[];
  My_Params_Get_Work_list_By_BUSINESS_ID!: Params_Get_Work_list_By_BUSINESS_ID;
}
export class Result_Get_Work_list_By_WORK_AREA_ID extends Action_Result {
  My_Result!: Work_list[];
  My_Params_Get_Work_list_By_WORK_AREA_ID!: Params_Get_Work_list_By_WORK_AREA_ID;
}
export class Result_Get_Work_list_By_BUSINESS_ID_Adv extends Action_Result {
  My_Result!: Work_list[];
  My_Params_Get_Work_list_By_BUSINESS_ID!: Params_Get_Work_list_By_BUSINESS_ID;
}
export class Result_Get_Work_list_By_WORK_AREA_ID_Adv extends Action_Result {
  My_Result!: Work_list[];
  My_Params_Get_Work_list_By_WORK_AREA_ID!: Params_Get_Work_list_By_WORK_AREA_ID;
}
export class Result_Get_Work_list_By_WORK_LIST_ID_Adv extends Action_Result {
  My_Result!: Work_list;
  My_Params_Get_Work_list_By_WORK_LIST_ID!: Params_Get_Work_list_By_WORK_LIST_ID;
}
export class Result_Get_Work_list_By_OWNER_ID extends Action_Result {
  My_Result!: Work_list[];
  My_Params_Get_Work_list_By_OWNER_ID!: Params_Get_Work_list_By_OWNER_ID;
}
export class Result_Edit_User extends Action_Result {
  My_User!: User;
}
export class Result_Delete_User extends Action_Result {
  My_Params_Delete_User!: Params_Delete_User;
}
export class Result_Get_User_By_Criteria extends Action_Result {
  My_Result!: User[];
  My_Params_Get_User_By_Criteria!: Params_Get_User_By_Criteria;
}
export class Result_Get_User_By_Where extends Action_Result {
  My_Result!: User[];
  My_Params_Get_User_By_Where!: Params_Get_User_By_Where;
}
export class Result_Get_User_By_OWNER_ID extends Action_Result {
  My_Result!: User[];
  My_Params_Get_User_By_OWNER_ID!: Params_Get_User_By_OWNER_ID;
}
export class Result_Get_User_By_USER_ID extends Action_Result {
  My_Result!: User;
  My_Params_Get_User_By_USER_ID!: Params_Get_User_By_USER_ID;
}
export class Result_Get_SetupEntries_Per_Table extends Action_Result {
  My_Result!: SetupEntry[];
  My_Params_Get_SetupEntries_Per_Table!: Params_Get_SetupEntries_Per_Table;
}
export class Result_Get_User_By_Criteria_Adv extends Action_Result {
  My_Result!: User[];
  My_Params_Get_User_By_Criteria!: Params_Get_User_By_Criteria;
}
export class Result_Delete_User_By_USERNAME extends Action_Result {
  My_Params_Delete_User_By_USERNAME!: Params_Delete_User_By_USERNAME;
}
