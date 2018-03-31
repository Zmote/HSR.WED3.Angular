import {Component, OnInit} from '@angular/core';
import PaymentForm from './util/PaymentForm';

@Component({
  selector: 'wed-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  public paymentForm: PaymentForm = new PaymentForm();

  constructor() {
  }

  ngOnInit() {
  }

  doPay(paymentForm: PaymentForm) {
    if (paymentForm && paymentForm.valid) {
      console.log('Form is valid');
    } else {
      console.log('Form is not valid');
    }
  }
}
