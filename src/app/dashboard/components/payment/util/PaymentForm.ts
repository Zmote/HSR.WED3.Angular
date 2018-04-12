import {FormControl, FormGroup, Validators} from '@angular/forms';

export class PaymentForm extends FormGroup {
  // To use automatically in template
  // because we pass it to super, it needs to be static
  // Ask: Could this be done in a better way?
  private static opts = {
    common: {
      minLength: 3
    },
    payment: {
      min: 1
    }
  };

  constructor() {
    super({
      to: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(PaymentForm.opts.common.minLength)
        ]
      }),
      amount: new FormControl('', {
        validators: [
          Validators.required,
          Validators.min(PaymentForm.opts.payment.min)
        ]
      })
    });
  }

  get options() {
    return PaymentForm.opts;
  }
}

export default PaymentForm;
