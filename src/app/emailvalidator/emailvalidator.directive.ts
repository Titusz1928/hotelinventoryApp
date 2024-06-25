import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[hinvEmailvalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailvalidatorDirective,
      multi: true
    },
  ],
})
export class EmailvalidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    if (value && value.includes('test')) {
      console.log("invalid email");
      return {
        invalidEmail: true
      };
    }
    console.log("valid email");
    return null;
  }

  registerOnValidatorChange?(fn: () => void): void {

  }

}
