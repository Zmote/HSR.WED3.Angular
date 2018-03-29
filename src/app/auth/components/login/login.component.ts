import {ActivatedRoute, Params} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services';
import {NavigationService} from '../../../core/services';
import {LoginInfo} from '../../models';
import LoginForm from './util/LoginForm';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'wed-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private backUrl;
  public isProcessing = false;
  public loginForm: LoginForm = new LoginForm();

  constructor(private autSvc: AuthService, private navigationSvc: NavigationService, route: ActivatedRoute) {
    route.params.subscribe(
      (p: Params) => this.backUrl = p['backUrl']);
  }

  ngOnInit() {
    this.backUrl = '';
    this.autSvc.authenticatedUserChange.subscribe(
      (credentials) => {
        this.isProcessing = false;
        if (credentials) {
          if (this.backUrl) {
            this.navigationSvc.goToUrl(this.backUrl);
          } else {
            this.navigationSvc.goToDashboard();
          }
        }
      });
  }

  public doLogin(form: NgForm): boolean {
    this.loginForm.submitted = true;
    if (form && form.valid) {
      this.isProcessing = true;
      this.autSvc.login(new LoginInfo(form.value.login, form.value.password));
    }
    return false;
  }
}
