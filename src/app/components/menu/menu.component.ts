import { Component, OnInit } from '@angular/core';
import { menumodel } from '../../core/Models/menumodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  entries: menumodel[] = [];
  constructor(private router: Router) { }

  MenuHandler(m: menumodel) {
    const NavArray = [];
    NavArray.push(m.route);
    this.router.navigate(NavArray);
  }

  ngOnInit() {
    let m = new menumodel();
    // m.fa_icon = 'far fa-user';
    m.fa_icon = 'fas fa-user-shield';
    m.title = 'Admin';
    m.route = 'admin';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fa fa-user';
    m.title = 'Client';
    m.route = 'client';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fas fa-briefcase';
    m.title = 'Business';
    m.route = 'business';
    this.entries.push(m);


    // m = new menumodel();
    // m.fa_icon = 'far fa-money-bill-alt';
    // m.title = 'Currency';
    // m.route = 'currency';
    // this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fas fa-calendar-week';
    m.title = 'Booking';
    m.route = 'booking';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fas fa-dollar-sign';
    m.title = 'Boost Pricing';
    m.route = 'boost-pricing';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fas fa-file-invoice-dollar';
    m.title = 'Boost Listing';
    m.route = 'boost-listing';
    this.entries.push(m);


    m = new menumodel();
    m.fa_icon = 'far fa-cog';
    m.title = 'Service';
    m.route = 'service-prod';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fas fa-clipboard';
    m.title = 'Category';
    m.route = 'category';
    this.entries.push(m);

    // m = new menumodel();
    // m.fa_icon = 'far fa-clipboard';
    // m.title = 'Sub Category';
    // m.route = 'sub-category';
    // this.entries.push(m);

    // m = new menumodel();
    // m.fa_icon = 'fas fa-comment-dots';
    // m.title = 'Feedback';
    // m.route = 'feedback';
    // this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fas fa-clipboard-list';
    m.title = 'Status';
    m.route = 'status';
    this.entries.push(m);


    // m = new menumodel();
    // m.fa_icon = 'fas fa-receipt';
    // m.title = 'Invoices';
    // m.route = 'invoices';
    // this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fas fa-map-marked-alt';
    m.title = 'Work Area';
    m.route = 'work-area';
    this.entries.push(m);


    // m = new menumodel();
    // m.fa_icon = 'far fa-map-marker-alt';
    // m.title = 'Coordinates';
    // m.route = 'coordinates';
    // this.entries.push(m);

    // m = new menumodel();
    // m.fa_icon = 'far fa-map-marker-alt';
    // m.title = 'Work List';
    // m.route = 'work_list';
    // this.entries.push(m);


    // m = new menumodel();
    // m.fa_icon = 'far fa-map-marker-alt';
    // m.title = 'Test';
    // m.route = 'test';
    // this.entries.push(m);
  }
}
