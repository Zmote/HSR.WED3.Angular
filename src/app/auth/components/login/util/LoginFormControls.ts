import {FormControl, Validators} from '@angular/forms';

export class LoginFormControls {
  public opts = {
    common: {
      minLength: 3
    }
  };
  public login: FormControl;
  public password: FormControl;
  constructor() {
    this.login = new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(this.opts.common.minLength)
      ]
    });

    this.password = new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(this.opts.common.minLength)
      ]
    });
  }
} export default LoginFormControls;
