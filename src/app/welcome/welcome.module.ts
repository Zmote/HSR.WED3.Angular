import {NgModule, ModuleWithProviders} from '@angular/core';

import {SharedModule} from '../shared/shared.module';

import {WelcomeRoutingModule} from './welcome-routing.module';
import {WelcomeComponent} from './welcome.component';
import {AuthModule} from '../auth/auth.module';

const EXPORTED_DECLARATIONS = [
  // Declarations (Components / Directives) which can be used outside the Module
  WelcomeComponent
];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS
  // Declarations (Components / Directives) which can be used inside the Module
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS
  // Components/Directives (or even Modules) to export (available for other modules; and forRoot() )
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [
    WelcomeRoutingModule, SharedModule, AuthModule
  ],
  exports: EXPORTS,
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
