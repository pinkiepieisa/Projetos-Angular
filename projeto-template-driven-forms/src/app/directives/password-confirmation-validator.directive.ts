import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appPasswordConfirmationValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordConfirmationValidatorDirective,
      multi: true,
    }
  ]
})
export class PasswordConfirmationValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    if(!control.value.confirmarSenha) return null;
    // Confirmação da senha que cai nos erros presente no formulário

    const passwordConfirmationControl = control.get('confirmarSenha');

    if(control.value.senha != control.value.confirmarSenha) {
      passwordConfirmationControl?.setErrors({'invalidPasswordConfirmation': true})

      return {'invalidPasswordConfirmation': true};
    }
    // Confirmação alinhada aos dois campos

    return null;
  }
}
