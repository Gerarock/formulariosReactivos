import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent {

  public formClient: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.formClient = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40), Validators.pattern(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
      telefono: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10), Validators.pattern(/^([0-9])*$/)]],
      usuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      passwordRepeat: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]]
    }, { validators: [this.checkPasswords] });
  };

  checkPasswords: ValidatorFn = (
    control: AbstractControl
  ): ValidationErrors | null => {
    const password = control.get("password");
    const password_repeat = control.get("password_repeat");
    return password &&
      password_repeat &&
      password.value !== password_repeat.value
      ? { passwordCoincide: false }
      : null;
  };

  createAccount() {
    console.log('asd');
  }

}