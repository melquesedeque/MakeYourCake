import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticarGuardGuard } from '../VerificarURL/autenticar-guard.guard';
import { MenuController } from '@ionic/angular';
import { UsuarioService } from '../services/usuario.service';
import { async } from 'q';
import { AppComponent } from '../app.component';
import * as firebase from 'firebase';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { Usuario } from '../models/usuario';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  id;
  msg;
  listaUsuario;
  verificarEMail = false;
  verificarSenha = false;
  formulario: FormGroup;

  constructor(private admob:AdMobFree,private formBuilder: FormBuilder, private rotas: Router, private menuBarra: MenuController, private user: UsuarioService, private googlePlus:GooglePlus) {
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

    this.admob.banner.config({
      id: 'ca-app-pub-8227759296789109/3726902224',
      isTesting:true, //Está em ambiente de teste
      autoShow: true
      });
      this.admob.banner.prepare();
  }

  async validarLogin() {
    firebase.auth().signInWithEmailAndPassword(this.formulario.get('email').value, this.formulario.get('senha').value).then(usuarioLogado => {
      if (usuarioLogado != null) {
        AutenticarGuardGuard.podeAcessar = true;
        this.rotas.navigateByUrl('/consultar-produtos');
      }
    }).catch(erro => {
      this.msg = "E-mail ou Senha Invalidos!";
    });
  }

  visitante() {
    firebase.auth().signInAnonymously().then(ok => {

      if (ok != null) {
        var user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: 'Visitante',
        }).then(certo => this.rotas.navigateByUrl('/consultar-produtos')).catch(erro => alert("Erro ao Tentar se Logar!"));
      }
    }).catch(erro => {
      alert("Erro Logar");
    });
  }

  loginGoogle(){

    var provider = new firebase.auth.GoogleAuthProvider();

    console.log("AQUI")
    //============= WEB ================/
     firebase.auth().signInWithPopup(provider).then(resultado => {
       var token = resultado.credential.providerId;
       var usuario = resultado.user;
       alert("Olha o Token "+token)+" Olha o Usuario "+usuario.email;
     }).catch(erro => {
       alert("Olha o Erro "+erro);
     });

    //========== NATIVO ===============/
    /* this.googlePlus.login({
      'webClientId': '76958762949-3scb5cr75s9o8d2vsr82ch5iip7ji6gs.apps.googleusercontent.com',
      'offline': true,
      'scope': 'email profile'
    }).then( res => {
            const googleCredential = firebase.auth.GoogleAuthProvider.credential(res.idToken);
            firebase.auth().signInWithCredential(googleCredential) .then( response => {
              alert('Entrou');
          });
    }, err => {
        alert('FALHOU ' +err)
    }); */

    /* firebase.auth().signInWithRedirect(this.provider).then(resultado => console.log("OK"));

    firebase.auth().getRedirectResult().then(resultado => {
      if(resultado.credential){
        var token = resultado.credential.providerId;
        var Usuario = resultado.user;
        console.log("Olha o Token "+token);
        console.log("Olha o Usuario "+Usuario.email);
      }else{
        console.log("ERRO");
      }
    }).catch(erro => alert("Olha o ERRO "+erro));*/
  }
}