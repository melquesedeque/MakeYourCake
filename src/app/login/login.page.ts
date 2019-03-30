import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticarGuardGuard } from '../VerificarURL/autenticar-guard.guard';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  msg;
  verificarEMail = false;
  verificarSenha = false;
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private rotas: Router,private menuBarra:MenuController) {
  }

  ionViewWillEnter() {
    //this.menuBarra.enable(false); //Desabilita
}

  ngOnInit() {
    this.msg = "";
    this.formulario = this.formBuilder.group({
      email: ['melque@gmail.com', [Validators.email, Validators.required]],
      senha: ['123456', [Validators.required, Validators.minLength(6)]]
    });
  }

  validarLogin() {
    if ((this.formulario.get('email').value === 'melque@gmail.com') && this.formulario.get('email').valid) {
      this.verificarEMail = true;

      if ((this.formulario.get('senha').value === "123456") && this.formulario.get('senha').valid) {
        this.verificarSenha = true;
      } else {
        this.msg = "Senha Invalida!";
      }

    } else {
      this.msg = "E-mail Invalido!";
    }

    if (this.verificarEMail && this.verificarSenha) {
      this.rotas.navigateByUrl("/consultar-produtos");
      AutenticarGuardGuard.podeAcessar = true;
    }
  }
}