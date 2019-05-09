import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';

@Component({
  selector: 'app-lista-produtos-cadastrados',
  templateUrl: './lista-produtos-cadastrados.page.html',
  styleUrls: ['./lista-produtos-cadastrados.page.scss'],
})
export class ListaProdutosCadastradosPage implements OnInit {

  listaProdutos:any = [];
  constructor(private produtoService:ProdutosService) { }

  ionViewWillEnter(){
    this.produtoService.buscarTodos().then(resultados => {
      this.listaProdutos = resultados;
    });
    /* this.produto.getAll().then(resultado => {
      this.listaProdutos = resultado;
    }); */
  }

  ngOnInit() { }

}
