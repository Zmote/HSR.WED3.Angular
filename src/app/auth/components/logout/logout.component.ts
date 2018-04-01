import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {AuthService} from '../../services';
import {NavigationService} from '../../../core/services';
// Be aware, we need to import this explicitly, or it will try to use the one from AuthService
// which apparently has a slightly different makeup, as it doesn't match
import {Account} from '../../models';


@Component({
  selector: 'wed-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  public user: Account;
  // Can't use HostListener('click') due to restriction with HostBinding on Rendering
  // if we set HostBinding('mat-button') matbutton:any = '', it will correctly add the
  // attribute to the wed-logout component, like <wed-logout mat-button>..</wed-logout>
  // but for some reason it doesn't render it as a directive, that's we use the
  // asItem input solution, ie. the logout component can be "imported" as a button a menu item
  // by setting the asItem value, per default its false, ie. will render it as a button
  @Input() asItem = false;

  constructor(private autSvc: AuthService, private navigationSvc: NavigationService, route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = this.autSvc.authenticatedUser;
    this.autSvc.authenticatedUserChange.subscribe(
      (credentials) => {
        if (!credentials) {
          this.navigationSvc.goToHome();
        }
      });
  }

  public doLogout() {
    this.autSvc.logout();
  }
}
