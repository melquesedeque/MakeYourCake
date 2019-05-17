import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AutenticarGuardGuard } from './VerificarURL/autenticar-guard.guard';
import { Router } from '@angular/router';
import * as firebase from "firebase";
import { MonteSeuBoloService } from './services/monte-seu-bolo.service';
import { UsuarioService } from './services/usuario.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  idUsuarioLogado;
  nomeUsuario;
  idBolo;
  usuarioLogado: boolean = false;
  UsuarioAdmin: boolean = true;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private rotas: Router) {

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

    firebase.auth().onAuthStateChanged(usuario => {

      if (usuario != null) {
        this.nomeUsuario = usuario.displayName;
        console.log(usuario.displayName);
        var usuarioService: UsuarioService = new UsuarioService;
        usuarioService.buscarEmail(usuario.email).then(resultado => {
          if (resultado.tipoUsuario == "Admin") {
            this.UsuarioAdmin = true;
          } else {
            this.UsuarioAdmin = false;
          }
        });
      }

      var usuario = firebase.auth().currentUser;
      if (usuario != null) {
        if (usuario.displayName != "Visitante") {
          this.usuarioLogado = true;
          this.rotas.navigateByUrl('/consultar-produtos');
        }else{
          this.usuarioLogado = false;
        }
      } else {
        this.usuarioLogado = false;
      }
    });

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  deslogar() {
    var usuario = firebase.auth().currentUser;
    if (usuario.displayName == 'Visitante') {
      usuario.delete().then(deletar => {
        console.log("Visitante Deletado");
      });
    }

    firebase.auth().signOut();
    AutenticarGuardGuard.podeAcessar = false;
    this.rotas.navigateByUrl('/login');
  }

  montarBolo() {
    let boloServive: MonteSeuBoloService = new MonteSeuBoloService;
    boloServive.buscarTodos().then(resultados => {
      resultados.forEach(bolo => {
        this.idBolo = bolo.id;
      });
      this.rotas.navigate(['/atualizar-monte-seu-bolo', this.idBolo]);
    }).catch(erro => console.log("Erro"));
  }
}
