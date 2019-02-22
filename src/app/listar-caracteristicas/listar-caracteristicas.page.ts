import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-caracteristicas',
  templateUrl: './listar-caracteristicas.page.html',
  styleUrls: ['./listar-caracteristicas.page.scss'],
})
export class ListarCaracteristicasPage implements OnInit {

  nome:string;
  verificar:boolean = false;
  imagem;
  titulo;
  descricao;

  constructor(private pegarNomeBolo:ActivatedRoute) { }

  ngOnInit() {
    this.nome = this.pegarNomeBolo.snapshot.params['nomeBolo'];
    
    if (this.nome === "bolo1") {
      this.imagem = "../../assets/img/bolo-card-1.jpg";
      this.titulo = "Bolo Tropical";
      this.descricao = "Bolo de três camadas com cobertura de leite Condensado e Frutas.";
    } else if(this.nome === "bolo2"){
      this.imagem = "../../assets/img/bolo-card-2.jpg";
      this.titulo = "Bolo de Chocolate";
      this.descricao = "Bolo de três camadas com cobertura de de Chocolate 75% cacau.";
    }else if (this.nome === "bolo3"){
      this.imagem = "../../assets/img/bolo-card-3.jpg";
      this.titulo = "Bolo Bem Casado";
      this.descricao = "Bolo de duas camadas com cobertura de Brigadeiro e leite Condensado."; 
    }else if(this.nome === "bolo4"){
      this.imagem = "../../assets/img/bolo-card-4.jpg";
      this.titulo = "Bolo de Avelã com Chocolate";
      this.descricao = "Bolo de trÊs camadas com cobertura de Nutella e leite Condensado."; 
    }
  }

}
