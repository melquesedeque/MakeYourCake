import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  msg = "";
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  validarLogin() {
    if ((this.formulario.get('email').value === 'melque@gmail.com') && this.formulario.get('email').valid) {
      console.log('E-mail Correto!');
    } else {
      console.log('E-mail Está Invalido!');
    }

    if (this.formulario.get('senha').value === "123456") {
      console.log('Senha Correta!');
    } else {
      console.log('Senha Está Invalida!');
    }
  }
}
