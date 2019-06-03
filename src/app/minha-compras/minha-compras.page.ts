import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../services/compras.service';
import * as firebase from 'firebase';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-minha-compras',
  templateUrl: './minha-compras.page.html',
  styleUrls: ['./minha-compras.page.scss'],
})
export class MinhaComprasPage implements OnInit {

  minhasCompras:any = [];
  loading;
  constructor(private loadingController: LoadingController, private compraService:ComprasService) { }

  ngOnInit() {
  }

  async carregando() {
    this.loading = await this.loadingController.create({
      message: 'Carregando...',
    });
    await this.loading.present();
  }

  ionViewWillEnter(){
    this.carregando();
    let userID = firebase.auth().currentUser.uid;
    this.compraService.buscarTodosPorID(userID).then(resultados =>{
      this.minhasCompras = resultados;
      this.loading.dismiss();
    });
  }

}
