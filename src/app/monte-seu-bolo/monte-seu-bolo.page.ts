import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonteSeuBoloService } from '../services/monte-seu-bolo.service';
import { MonteSeuBolo } from '../models/monte-seu-bolo';

@Component({
  selector: 'app-monte-seu-bolo',
  templateUrl: './monte-seu-bolo.page.html',
  styleUrls: ['./monte-seu-bolo.page.scss'],
})
export class MonteSeuBoloPage implements OnInit {

  id;
  tipoBolo:string;
  monteSeuBolo:MonteSeuBolo = new MonteSeuBolo;
  constructor(private rotas:Router,private boloService:MonteSeuBoloService,private pegarIdBolo:ActivatedRoute) {}

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.boloService.buscarTodos().then(resultado =>{
      resultado.forEach(bolo => {
        this.monteSeuBolo = bolo;
      });
    }).catch(erro => alert('ERRO'));
  }

  public monteBolo(tipo:string){
    if(tipo == "kitkat"){
      this.tipoBolo = tipo;
    }else if(tipo == "oreo"){
      this.tipoBolo = tipo;
    }else if(tipo == "raspas"){
      this.tipoBolo = tipo;
    }else if(tipo == "morango"){
      this.tipoBolo = tipo;
    }
  }

  finalizarPedido(){
    this.rotas.navigate(['finalizar-pedido-monte',this.tipoBolo]);
  }
}
