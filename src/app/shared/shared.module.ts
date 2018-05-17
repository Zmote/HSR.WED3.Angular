import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {PageNotFoundComponent} from './components';
import {MatButtonModule} from '@angular/material';
import {RouterModule} from '@angular/router';

const EXPORTED_DECLARATIONS = [
  // TODO: Add declarations here, if additional components/directives/... should be exported
  PageNotFoundComponent
];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS
  // Declarations (Components / Directives) which can be used inside the Module
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS
  // TODO: Add exports here, if additional modules should be exported
];

@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [
    FormsModule,
    MatButtonModule,
    RouterModule
  ],
  exports: EXPORTS,
  providers: []
})
export class SharedModule {
  // forRoot() isn't needed here...
}
