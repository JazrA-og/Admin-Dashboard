import { Component , OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { SignalRService } from './core/services/SignalRService';
import { Proxy } from './core/services/proxy.service';
import { CommonService } from './core/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Show_Logout$!: Subject<boolean>;
  ui_direction = 'ltr';
  constructor
    (
      private proxy: Proxy,
      private CmSvc: CommonService,
      private translate: TranslateService,
      private signalR: SignalRService
    ) {
      this.translate.setDefaultLang('en');
      this.translate.use('en');
      this.CmSvc.UI_Direction.subscribe(x => this.ui_direction = x)
    }
  ngOnInit(): void {
    this.Show_Logout$ = this.CmSvc.Is_Logged_In;
    // this.signalR.initialize();
  }
}
