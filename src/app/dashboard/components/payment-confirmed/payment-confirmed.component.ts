import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PaymentInfo} from '../../models';

@Component({
  selector: 'wed-payment-confirmed',
  templateUrl: './payment-confirmed.component.html',
  styleUrls: ['./payment-confirmed.component.scss']
})
export class PaymentConfirmedComponent {

  @Output() paymentConfirmed = new EventEmitter<boolean>();
  @Input() lastPayment: PaymentInfo;

  doConfirm() {
    this.paymentConfirmed.emit(true);
  }

}
