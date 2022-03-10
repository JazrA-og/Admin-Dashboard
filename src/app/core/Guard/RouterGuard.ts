import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';

@Injectable()
export class CanActivateThisRoute implements CanActivate {
    constructor(private CmSvc: CommonService, private router: Router) {}
    canActivate(): boolean {
        if (this.CmSvc.Is_Logged_In.getValue()) {
            return true;
        } else {
            this.router.navigate(['/Login']);
            return false;
        }
    }
}
