import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AutenticarGuardGuard } from '../VerificarURL/autenticar-guard.guard';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-finalizar-pedido-monte',
  templateUrl: './finalizar-pedido-monte.page.html',
  styleUrls: ['./finalizar-pedido-monte.page.scss'],
})
export class FinalizarPedidoMontePage implements OnInit {

  foto;
  descricao;
  valor;
  estruturaBolo;
  constructor(private rotas:Router, private vibracao:Vibration,private toast:ToastController, private pegarNomeBolo:ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.estruturaBolo = this.pegarNomeBolo.snapshot.params['id'];
    console.log(this.estruturaBolo);
    if(this.estruturaBolo == "oreo"){
      this.foto = '../../assets/img/bolo-card-6.jpg';
      this.valor = '150,00';
      this.descricao = 'Bolo de Oreo Feito para você!';
    }else if(this.estruturaBolo == "raspas"){
      this.foto = '../../assets/img/bolo-card-8.jpg';
      this.valor = '100,00';
      this.descricao = 'Bolo de Raspas de Chocolate Todo especial Feito para você!';
    }else if(this.estruturaBolo == "kitkat"){
      this.foto = '../../assets/img/bolo-card-5.jpg';
      this.valor = '200,00';
      this.descricao = 'Um delicioso Bolo de Kitkat Feito para você!';
    }else{
      this.foto = '../../assets/img/bolo-card-7.jpg';
      this.valor = '350,00';
      this.descricao = 'Bolo de Morango mais do Bom Feito para você!';
    }
  }

  comprar(){
    this.mensagemToast();
    this.vibracao.vibrate(1000);
    this.rotas.navigateByUrl('/consultar-produtos');
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
