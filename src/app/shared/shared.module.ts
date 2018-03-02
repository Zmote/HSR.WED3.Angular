import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

const DECLARATIONS = [
  // TODO: Add declarations here, if additional components are placed within the shared module
];
const EXPORTS = [
  ...DECLARATIONS
  // TODO: Add declarations here, if additional components are placed within the shared module
];

@NgModule({
  declarations: [ DECLARATIONS ],
  imports: [
    FormsModule
  ],
  exports: [ EXPORTS ],
  providers: []
})
export class SharedModule {
  // forRoot() isn't needed here...
}
