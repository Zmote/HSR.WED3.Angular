import {FormControl, FormGroup, Validators} from '@angular/forms';

export class LoginForm extends FormGroup {
  // To use automatically in template
  // because we pass it to super, it needs to be static
  // Ask: Could this be done in a better way?
  private static opts = {
    common: {
      minLength: 3
    }
  };

  constructor() {
    super({
      login: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(LoginForm.opts.common.minLength)
        ]
      }),
      password: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(LoginForm.opts.common.minLength)
        ]
      })
    });
  }

  get options() {
    return LoginForm.opts;
  }
}

export default LoginForm;
