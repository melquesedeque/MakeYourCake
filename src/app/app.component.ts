import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AutenticarGuardGuard } from './VerificarURL/autenticar-guard.guard';
import { Router } from '@angular/router';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  idUsuarioLogado;
  nomeUsuario;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private rotas:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {

    var firebaseConfig = {
      apiKey: "AIzaSyB-mdqHAC7ZElAz8mT15LeasRlNWaCP3Xk",
      authDomain: "makeyourcake-fb179.firebaseapp.com",
      databaseURL: "https://makeyourcake-fb179.firebaseio.com",
      projectId: "makeyourcake-fb179",
      storageBucket: "makeyourcake-fb179.appspot.com",
      messagingSenderId: "76958762949",
      appId: "1:76958762949:web:e1f8fcbee9cb6df1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    firebase.auth().onAuthStateChanged(usuario => this.nomeUsuario = usuario.displayName);

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  deslogar(){
    firebase.auth().signOut();
    AutenticarGuardGuard.podeAcessar = false;
    AutenticarGuardGuard.idUsuarioLogado = '00';
  }
}
