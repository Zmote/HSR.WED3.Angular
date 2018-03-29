import {AbstractControl} from '@angular/forms';

// Ref: https://scotch.io/@ibrahimalsurkhi/match-password-validation-with-angular-2
export class PasswordValidation {
  static MatchPassword(AC: AbstractControl) {
    const password = AC.get('password').value; // to get value in input tag
    const passwordConfirm = AC.get('passwordConfirm').value; // to get value in input tag
    if (password !== passwordConfirm) {
      AC.get('passwordConfirm').setErrors({MatchPassword: true});
    } else {
      return null;
    }
  }
}
