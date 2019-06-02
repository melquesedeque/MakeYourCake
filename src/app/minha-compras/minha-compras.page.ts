import { Component, OnInit } from '@angular/core';
import { ComprasService } from '../services/compras.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-minha-compras',
  templateUrl: './minha-compras.page.html',
  styleUrls: ['./minha-compras.page.scss'],
})
export class MinhaComprasPage implements OnInit {

  minhasCompras:any = [];
  constructor(private compraService:ComprasService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    let userID = firebase.auth().currentUser.uid;
    this.compraService.buscarTodosPorID(userID).then(resultados =>{
      this.minhasCompras = resultados;
    });
  }

}
