import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
  /*
    Checks if the values contains at least lowercase letter
    The error name is 'hasLowercaseLetters'
    */
  static hasLowercaseLetters(ctrl: AbstractControl): ValidationErrors | null {
    let pattern: RegExp = /[a-z]/;
    return pattern.test(ctrl.value) ? null : { hasLowercaseLetters: true };
  }

  /*
    Checks if the values contains at least uppercase letter
    The error name is 'hasUppercaseLetters'
    */
  static hasUppercaseLetters(ctrl: AbstractControl): ValidationErrors | null {
    let pattern: RegExp = /[A-Z]/;
    return pattern.test(ctrl.value) ? null : { hasUppercaseLetters: true };
  }

  /*
    Checks if the values contains at least one number
    The error name is 'hasNumbers'
    */
  static hasNumbers(ctrl: AbstractControl): ValidationErrors | null {
    let pattern: RegExp = /\d/;
    return pattern.test(ctrl.value) ? null : { hasNumbers: true };
  }

  /*
    Checks if the values of matches an email pattern
    Example: Valid -> test@gmail.com | Not Valid -> test@gmail
    The error name is 'validEmail'
    */
  static validEmail(ctrl: AbstractControl): ValidationErrors | null {
    let pattern: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return pattern.test(ctrl.value) ? null : { validEmail: true };
  }

  /*
    Checks if the values of the provided field names matches
    The error name is 'missmatch'
    */
  static matchFields(firstControl: string, secondControl: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const firstField = control.root.get(firstControl);
      const secondField = control.root.get(secondControl);
      if (firstField && secondField) {
        if (firstField.value != secondField.value) {
          return { missmatch: true };
        }
      }
      return null;
    };
  }

  /*
    Checks if the values of matches a license pattern
    Example: Valid -> PB-AA-1234 | Not Valid -> PB AA 1234
    The error name is 'validLicensePlate'
    */
  static validLicensePlate(ctrl: AbstractControl): ValidationErrors | null {
    const pattern: RegExp = /^[a-zA-Z]{1,3}-[a-zA-Z]{1,2}-\d{1,4}$/;
    return pattern.test(ctrl.value) ? null : { validLicensePlate: true };
  }
}

