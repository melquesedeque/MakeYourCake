import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';
import { Vibration } from '@ionic-native/vibration/ngx';
import { ToastController, LoadingController } from '@ionic/angular';
import { Produto } from '../models/produto';
import { ComprasService } from '../services/compras.service';
import { Compras } from '../models/compras';
import * as firebase from 'firebase';

@Component({
  selector: 'app-listar-caracteristicas',
  templateUrl: './listar-caracteristicas.page.html',
  styleUrls: ['./listar-caracteristicas.page.scss'],
})
export class ListarCaracteristicasPage implements OnInit {

  id;
  verificar: boolean = false;
  produtoObjeto: Produto = new Produto;
  compras:Compras = new Compras;
  loading;
  constructor(private loadingController: LoadingController, private compraService: ComprasService, private pegarIdBolo: ActivatedRoute, private toast: ToastController, private produtoService: ProdutosService, private rotas: Router, private vibracao: Vibration) { }

  ionViewWillEnter() {
    this.carregando();
    this.id = this.pegarIdBolo.snapshot.params['id'];
    this.produtoService.buscar(this.id).then(resultado => {
      this.produtoObjeto = resultado;
      this.loading.dismiss();
    });
  }

  async carregando() {
    this.loading = await this.loadingController.create({
     message: 'Carregando...',
   });
   await this.loading.present();
 }

  comprar() {
    let data:Date = new Date;
    let user = firebase.auth().currentUser;
    this.compras.idCliente = user.uid;
    this.compras.idCompra = this.produtoObjeto.id;
    this.compras.titulo = this.produtoObjeto.titulo;
    this.compras.descricao = this.produtoObjeto.descricao;
    this.compras.valor = this.produtoObjeto.valor;
    this.compras.dataComprar = `0${data.getDate()}/0${data.getMonth()+1}/${data.getFullYear()}`;
    this.compras.imagem = this.produtoObjeto.imagem;

    if (this.compras != null) {
      try {
        this.compraService.cadastrar(this.compras);
        this.mensagemToast();
        this.vibracao.vibrate(1000);
        this.rotas.navigateByUrl('/consultar-produtos');
      } catch (error) {
        alert(`Olha o ${error}`);
      }
    }
  }

  async mensagemToast() {
    const toast = await this.toast.create({
      message: 'Compra Realizada com Sucesso!',
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }

  ngOnInit() { }

}
