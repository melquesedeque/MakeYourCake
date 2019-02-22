import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consultar-produtos',
  templateUrl: './consultar-produtos.page.html',
  styleUrls: ['./consultar-produtos.page.scss'],
})
export class ConsultarProdutosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pegarIdBolo(nomeBolo){
    console.log(nomeBolo);
  }
}
