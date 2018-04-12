import {Directive, Host, OnInit, Optional} from '@angular/core';
import {TransactionComponent} from '../transaction.component';

@Directive({
  selector: 'wed-transaction[wedWithFiltering]'
})
export class WithFilteringDirective {
  constructor(@Optional() @Host() transactionComponent: TransactionComponent) {
    if (transactionComponent) {
      transactionComponent.withFiltering = true;
    }
  }
}
