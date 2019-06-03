import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { AutenticarGuardGuard } from '../VerificarURL/autenticar-guard.guard';
import { MenuController, LoadingController } from '@ionic/angular';
import { ProdutosService } from '../services/produtos.service';
import { UsuarioService } from '../services/usuario.service';
import { MonteSeuBoloService } from '../services/monte-seu-bolo.service';
import * as firebase from "firebase";
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-consultar-produtos',
  templateUrl: './consultar-produtos.page.html',
  styleUrls: ['./consultar-produtos.page.scss'],
})
export class ConsultarProdutosPage implements OnInit {

  id;
  nomeUsuario;
  listaProdutos: any = [];
  contaUsuario: Usuario = new Usuario;
  loading;
  constructor(private loadingController: LoadingController,private usuarioService: UsuarioService, private boloservive: MonteSeuBoloService, private menuBarra: MenuController, private produtosService: ProdutosService, private idUsuario: ActivatedRoute) { }

  ionViewWillEnter() {
    this.menuBarra.enable(true); //Desabilita
    this.carregando();
    this.produtosService.buscarTodos().then(resultados => {
      this.listaProdutos = resultados;
      this.loading.dismiss();
    });

    var user = firebase.auth().currentUser;
    this.usuarioService.buscarEmail(user.email).then(resultados => {
      if (resultados == null) {
        if (user.displayName != 'Visitante') {
          this.contaUsuario.id = user.uid;
          this.contaUsuario.nome = user.displayName;
          this.contaUsuario.email = user.email;
          this.contaUsuario.tipoUsuario = "Comun";

          try {
            this.usuarioService.cadastrar(this.contaUsuario);
          } catch (error) {
            alert("ERRO");
          }
        }
      }
    });
  }

  async carregando() {
    this.loading = await this.loadingController.create({
     message: 'Carregando...',
   });
   await this.loading.present();
 }

  /* teste(){
    console.log("AQui");
    this.boloservive.testecadastro();
  } */

  ngOnInit() { }
}