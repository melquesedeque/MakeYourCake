import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AutenticarGuardGuard } from './VerificarURL/autenticar-guard.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  idUsuarioLogado;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private rotas:Router
  ) {
    this.initializeApp();
  }

  onClick(){
    this.rotas.navigate(['/consultar-produtos',AutenticarGuardGuard.idUsuarioLogado]);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  deslogar(){
    AutenticarGuardGuard.podeAcessar = false;
    AutenticarGuardGuard.idUsuarioLogado = '00';
  }
}
