import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AutenticarGuardGuard } from '../VerificarURL/autenticar-guard.guard';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-finalizar-pedido-monte',
  templateUrl: './finalizar-pedido-monte.page.html',
  styleUrls: ['./finalizar-pedido-monte.page.scss'],
})
export class FinalizarPedidoMontePage implements OnInit {

  constructor(private rotas:Router, private vibracao:Vibration,private toast:ToastController) { }

  ngOnInit() {
  }

  comprar(){
    this.mensagemToast();
    this.vibracao.vibrate(1000);
    this.rotas.navigate(['/consultar-produtos',AutenticarGuardGuard.idUsuarioLogado]);
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
