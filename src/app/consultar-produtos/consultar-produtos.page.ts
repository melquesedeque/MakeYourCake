import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { AutenticarGuardGuard } from '../VerificarURL/autenticar-guard.guard';
import { MenuController } from '@ionic/angular';
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
  constructor(private usuarioService: UsuarioService, private boloservive: MonteSeuBoloService, private menuBarra: MenuController, private produtosService: ProdutosService, private idUsuario: ActivatedRoute) { }

  ionViewWillEnter() {
    this.menuBarra.enable(true); //Desabilita
    this.produtosService.buscarTodos().then(resultados => {
      this.listaProdutos = resultados;
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
            console.log('Cadastrando Usuário!');
            console.log(this.contaUsuario.id);
            console.log(this.contaUsuario.nome);
            console.log(this.contaUsuario.email);
            console.log(this.contaUsuario.tipoUsuario);
            this.usuarioService.cadastrar(this.contaUsuario);
          } catch (error) {
            alert("ERRO");
          }
        }
      } else {
        console.log("Usuario Cadastrato!");
      }
    });
  }

  /* teste(){
    console.log("AQui");
    this.boloservive.testecadastro();
  } */

  ngOnInit() { }
}