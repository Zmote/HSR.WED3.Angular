import {NgModule, ModuleWithProviders} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {WelcomeRoutingModule} from './welcome-routing.module';
import {WelcomeComponent} from './welcome.component';
import {AuthModule} from '../auth/auth.module';

const DECLARATIONS = [
  WelcomeComponent
];
const EXPORTS = [
  ...DECLARATIONS
];

@NgModule({
  declarations: [ DECLARATIONS ],
  imports: [
    WelcomeRoutingModule, SharedModule, AuthModule
  ],
  exports: [ EXPORTS ],
  providers: [ ]
})
export class WelcomeModule {
  static forRoot(config?: {}): ModuleWithProviders {
    return {
      ngModule: WelcomeModule,
      providers: [ ]
    };
  }

}
