import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { AutenticarGuardGuard } from '../VerificarURL/autenticar-guard.guard';
import { MenuController } from '@ionic/angular';
import { ProdutosService } from '../services/produtos.service';
import { UsuarioService } from '../services/usuario.service';
import { MonteSeuBoloService } from '../services/monte-seu-bolo.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-consultar-produtos',
  templateUrl: './consultar-produtos.page.html',
  styleUrls: ['./consultar-produtos.page.scss'],
})
export class ConsultarProdutosPage implements OnInit {

  id;
  nomeUsuario;
  listaProdutos:any = [];
  constructor(private boloservive:MonteSeuBoloService,private menuBarra:MenuController, private produtosService:ProdutosService, private idUsuario:ActivatedRoute,private user:UsuarioService) { }

  ionViewWillEnter() {
    this.menuBarra.enable(true); //Desabilita
    this.produtosService.buscarTodos().then(resultados =>{
      this.listaProdutos = resultados;
    });
  }

  /* teste(){
    console.log("AQui");
    this.boloservive.testecadastro();
  } */

  ngOnInit() { }
  
}