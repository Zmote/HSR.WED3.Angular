import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordValidation} from './PasswordValidation';

export class RegistrationForm extends FormGroup {
  // To use automatically in template
  // because we pass it to super, it needs to be static
  // Ask: Could this be done in a better way?
  private static opts = {
    common: {
      minLength: 3
    },
    name: {
      minLength: 2
    }
  };

  public submitted = false;

  constructor() {
    super({
        firstname: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(RegistrationForm.opts.name.minLength)
          ]
        }),
        lastname: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(RegistrationForm.opts.name.minLength)
          ]
        }),
        login: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(RegistrationForm.opts.common.minLength)
          ]
        }),
        password: new FormControl('', {
          validators: [
            Validators.required,
            Validators.minLength(RegistrationForm.opts.common.minLength)
          ]
        }),
        passwordConfirm: new FormControl('', {
            validators: [
              Validators.required,
              Validators.minLength(RegistrationForm.opts.common.minLength)
            ]
          }
        )
      },
      PasswordValidation.MatchPassword
    );
  }

  get options() {
    return RegistrationForm.opts;
  }
}

export default RegistrationForm;
