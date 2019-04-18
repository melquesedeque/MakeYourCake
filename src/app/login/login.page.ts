import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticarGuardGuard } from '../VerificarURL/autenticar-guard.guard';
import { MenuController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { async } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  id;
  msg;
  verificarEMail = false;
  verificarSenha = false;
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private rotas: Router,private menuBarra:MenuController,private user:UsuarioService) {
  }

  ionViewWillEnter() {
    this.menuBarra.enable(false); //Desabilit
  }

  ngOnInit() { 
    this.msg = "";
    this.formulario = this.formBuilder.group({
      email: ['ze@gmail.com', [Validators.email, Validators.required]],
      senha: ['123456', [Validators.required, Validators.minLength(6)]]
    });
  }

  async validarLogin() {
   
      let logou = await this.user.logar(this.formulario.get('email').value, this.formulario.get('senha').value);
      if (logou) {
        this.user.buscarTodosUsuarios().then(resultados =>{
          resultados.forEach(usuario => {
            if(usuario.email == this.formulario.get('email').value && usuario.senha == this.formulario.get('senha').value){
              this.id = usuario.id;
            }
          });
        });
        this.rotas.navigate(['/consultar-produtos',this.id]);
        AutenticarGuardGuard.podeAcessar = true;
        AutenticarGuardGuard.idUsuarioLogado = this.id;
      }else{
        this.msg="E-mail ou senha Incorreto";
      }
  }
}