import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonteSeuBoloService } from '../services/monte-seu-bolo.service';
import { MonteSeuBolo } from '../models/monte-seu-bolo';

@Component({
  selector: 'app-monte-seu-bolo',
  templateUrl: './monte-seu-bolo.page.html',
  styleUrls: ['./monte-seu-bolo.page.scss'],
})
export class MonteSeuBoloPage implements OnInit {

  id;
  monteSeuBolo:MonteSeuBolo = new MonteSeuBolo;
  constructor(private boloService:MonteSeuBoloService,private pegarIdBolo:ActivatedRoute) {}

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.boloService.buscarTodos().then(resultado =>{
      resultado.forEach(bolo => {
        this.monteSeuBolo = bolo;
      });
    }).catch(erro => alert('ERRO'));
  }

}
