import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-listar-caracteristicas',
  templateUrl: './listar-caracteristicas.page.html',
  styleUrls: ['./listar-caracteristicas.page.scss'],
})
export class ListarCaracteristicasPage implements OnInit {

  id;
  verificar:boolean = false;
  imagem;
  titulo;
  descricao;
  valor;
  produtoObjeto = [];

  constructor(private pegarIdBolo:ActivatedRoute,private produtos:ProdutosService) { }

  ionViewWillEnter(){
    this.id = this.pegarIdBolo.snapshot.params['id'];
    this.produtos.BuacarProdutoPorId(this.id).then(resultado => {
      this.produtoObjeto = resultado;
    });
  }

  ngOnInit() { }

}
