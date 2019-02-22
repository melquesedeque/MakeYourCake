import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { AutenticarGuardGuard } from '../VerificarURL/autenticar-guard.guard';

@Component({
  selector: 'app-consultar-produtos',
  templateUrl: './consultar-produtos.page.html',
  styleUrls: ['./consultar-produtos.page.scss'],
})
export class ConsultarProdutosPage implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
}
