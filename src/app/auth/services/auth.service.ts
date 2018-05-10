import {Injectable, EventEmitter} from '@angular/core';

import {isBlank} from '../../core';

import {AuthResourceService} from '../resources';
import {LoginInfo, RegistrationInfo, Credential, Account} from '../models';

import {SecurityTokenStore} from './credential-management';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class AuthService {

  public authenticatedUserChange: EventEmitter<Account> = new EventEmitter<Account>();

  public get authenticatedUser(): Account {
    return this.authUser;
  }

  private authUser: Account = null;

  constructor(private resource: AuthResourceService,
              private tokenStore: SecurityTokenStore,
              public snackBar: MatSnackBar) {
    if (tokenStore.storedValue) {
      this.authUser = tokenStore.storedValue.owner;
    }
  }

  public get hasCredentials(): boolean {
    return !isBlank(this.authenticatedUser);
  }

  public register(registerModel: RegistrationInfo): void {
    this.resource.register(registerModel).subscribe(
      (data: Account) => {
        if (data !== null) {
          this.login(registerModel);
        } else {
          this.snackBar.open('Failed to register. User already exists!',
            'Dismiss', {
              duration: 5000,
              panelClass: ['error-snackbar'],
              politeness: 'polite'
            });
        }
      });
  }

  public login(loginModel: LoginInfo): void {
    this.resource.login(loginModel).subscribe(
      (data: Credential) => {
        if (data !== null) {
          this.tokenStore.storedValue = data;
          this.authUser = !isBlank(data) ? data.owner : null;
          this.authenticatedUserChange.emit(this.authenticatedUser);
        } else {
          this.snackBar.open('Failed to login. Please check your credentials!',
            'Dismiss', {
              duration: 5000,
              panelClass: ['error-snackbar'],
              politeness: 'polite'
            });
        }
      });
  }

  public logout(): void {
    this.tokenStore.storedValue = null;
    this.authUser = null;
    this.authenticatedUserChange.emit(null);
  }
}
