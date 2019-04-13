import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { AutenticarGuardGuard } from '../VerificarURL/autenticar-guard.guard';
import { MenuController } from '@ionic/angular';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-consultar-produtos',
  templateUrl: './consultar-produtos.page.html',
  styleUrls: ['./consultar-produtos.page.scss'],
})
export class ConsultarProdutosPage implements OnInit {

  listaProdutos:any = [];
  constructor(private menuBarra:MenuController, private produtos:ProdutosService,) { }

  ionViewWillEnter() {
    this.menuBarra.enable(true); //Desabilita
  }

  ngOnInit() {
    this.produtos.getAll().then(resultado => {
      this.listaProdutos = resultado;
    }).catch((erro) => alert(erro));
  }
}
