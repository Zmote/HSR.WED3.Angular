import {NgModule, ModuleWithProviders} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {AuthService, SecurityTokenStore} from './services';
import {AuthResourceService, TokenInterceptor} from './resources';

import {LoginComponent, LogoutComponent,
  RegisterComponent} from './components';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    // TODO: Add declarations here, if additional components are placed within the Auth module
    LoginComponent, LogoutComponent, RegisterComponent
  ],
  imports: [
    FormsModule,
    SharedModule
  ],
  exports: [
    // TODO: Add declarations here, if additional components are placed within the Auth module
    LoginComponent, LogoutComponent, RegisterComponent
  ],
  providers: [ AuthResourceService ]
})
export class AuthModule {
  static forRoot(config?: {}): ModuleWithProviders {
    return {
      ngModule: AuthModule,
      providers: [
        // DI Providers (Services, Tokens, Factories...) to be used globally and instantiate only once

        // TODO: Add services/guards/... here, if additional classes are placed within the Auth moduley
        AuthService,
        SecurityTokenStore,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: TokenInterceptor,
          multi: true
        }]
    };
  }
}
