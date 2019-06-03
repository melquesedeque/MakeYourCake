import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AutenticarGuardGuard } from '../VerificarURL/autenticar-guard.guard';
import { ToastController } from '@ionic/angular';
import { Compras } from '../models/compras';
import { ComprasService } from '../services/compras.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-finalizar-pedido-monte',
  templateUrl: './finalizar-pedido-monte.page.html',
  styleUrls: ['./finalizar-pedido-monte.page.scss'],
})
export class FinalizarPedidoMontePage implements OnInit {

  foto;
  titulo;
  descricao;
  valor;
  estruturaBolo;
  compras: Compras = new Compras;
  constructor(private compraService: ComprasService, private rotas: Router, private vibracao: Vibration, private toast: ToastController, private pegarNomeBolo: ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.estruturaBolo = this.pegarNomeBolo.snapshot.params['id'];
    console.log(this.estruturaBolo);
    if (this.estruturaBolo == "oreo") {
      this.titulo = "Bolo de Oreo"
      this.foto = '../../assets/img/bolo-card-6.jpg';
      this.valor = 'R$ 150,00';
      this.descricao = 'Bolo de Oreo Feito para você!';
    } else if (this.estruturaBolo == "raspas") {
      this.titulo = "Bolo de Raspas de Chocolate"
      this.foto = '../../assets/img/bolo-card-8.jpg';
      this.valor = 'R$ 100,00';
      this.descricao = 'Bolo de Raspas de Chocolate Todo especial Feito para você!';
    } else if (this.estruturaBolo == "kitkat") {
      this.titulo = "Bolo de KITKAT"
      this.foto = '../../assets/img/bolo-card-5.jpg';
      this.valor = 'R$ 200,00';
      this.descricao = 'Um delicioso Bolo de Kitkat Feito para você!';
    } else {
      this.titulo = "Bolo de Morango"
      this.foto = '../../assets/img/bolo-card-7.jpg';
      this.valor = 'R$ 350,00';
      this.descricao = 'Bolo de Morango mais do Bom Feito para você!';
    }
  }

  comprar() {
    let data: Date = new Date;
    let userId = firebase.auth().currentUser.uid;

    this.compras.idCliente = userId;
    this.compras.idCompra = "";
    this.compras.titulo = this.titulo;
    this.compras.descricao = this.descricao;
    this.compras.valor = this.valor;
    this.compras.imagem = this.foto;
    this.compras.dataComprar = `0${data.getDate()}/0${data.getMonth() + 1}/${data.getFullYear()}`;

    if (this.comprar != null) {
      try {
        this.compraService.cadastrar(this.compras);
        this.mensagemToast();
        this.vibracao.vibrate(1000);
        this.rotas.navigateByUrl('/consultar-produtos');
      } catch (error) {
        alert(`Olha o Erro ${error}`);
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

}
