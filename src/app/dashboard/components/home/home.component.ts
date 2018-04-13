import {Component} from '@angular/core';
import {PaymentInfo} from '../../models';

@Component({
  selector: 'wed-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public newPaymentActive = true;
  public lastPayment: PaymentInfo = null;

  onPaymentExecuted($event: PaymentInfo) {
    this.lastPayment = $event;
    this.newPaymentActive = false;
  }

  onPaymentConfirmed() {
    this.newPaymentActive = true;
  }
}
