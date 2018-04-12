import {Directive, Host, Optional} from '@angular/core';
import {TransactionComponent} from '../transaction.component';

@Directive({
  selector: '[wedWithRedirectButton]'
})
export class WithRedirectButtonDirective {
  constructor(@Optional() @Host() transactionComponent: TransactionComponent) {
    if (transactionComponent) {
      transactionComponent.withRedirectButton = true;
    }
  }
}
