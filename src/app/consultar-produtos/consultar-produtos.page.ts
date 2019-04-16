import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { AutenticarGuardGuard } from '../VerificarURL/autenticar-guard.guard';
import { MenuController } from '@ionic/angular';
import { ProdutosService } from '../services/produtos.service';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-consultar-produtos',
  templateUrl: './consultar-produtos.page.html',
  styleUrls: ['./consultar-produtos.page.scss'],
})
export class ConsultarProdutosPage implements OnInit {

  id;
  nomeUsuario;
  listaProdutos:any = [];
  constructor(private menuBarra:MenuController, private produtos:ProdutosService, private idUsuario:ActivatedRoute,private user:UsuarioService) { }

  ionViewWillEnter() {
    this.menuBarra.enable(true); //Desabilita
    this.id = this.idUsuario.snapshot.params['id'];
    this.produtos.getAll().then(resultado => {
      this.listaProdutos = resultado;
    }).catch((erro) => alert(erro));

    if(this.id == '00'){
      this.nomeUsuario="VISITANTE";
    }else{
      this.user.BuacarUsuarioPorId(this.id).then(resultado => {
        resultado.forEach(usuario => {
        this.nomeUsuario = usuario.nome;
        });
      });
    }
  }

  ngOnInit() { }
  
}