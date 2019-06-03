import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lista-produtos-cadastrados',
  templateUrl: './lista-produtos-cadastrados.page.html',
  styleUrls: ['./lista-produtos-cadastrados.page.scss'],
})
export class ListaProdutosCadastradosPage implements OnInit {

  listaProdutos:any = [];
  loading;
  constructor(private loadingController: LoadingController, private produtoService:ProdutosService) { }

  ionViewWillEnter(){
    this.carregando();
    this.produtoService.buscarTodos().then(resultados => {
      this.listaProdutos = resultados;
      this.loading.dismiss();
    });
  }

  async carregando() {
    this.loading = await this.loadingController.create({
      message: 'Carregando...',
    });
    await this.loading.present();
  }

  ngOnInit() { }

}
