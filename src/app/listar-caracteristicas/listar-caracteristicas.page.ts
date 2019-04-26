import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';
import { Vibration } from '@ionic-native/vibration/ngx';
import { AutenticarGuardGuard } from '../VerificarURL/autenticar-guard.guard';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-listar-caracteristicas',
  templateUrl: './listar-caracteristicas.page.html',
  styleUrls: ['./listar-caracteristicas.page.scss'],
})
export class ListarCaracteristicasPage implements OnInit {

  id;
  verificar:boolean = false;
  imagem;
  titulo;
  descricao;
  valor;
  produtoObjeto = [];

  constructor(private pegarIdBolo:ActivatedRoute, private toast:ToastController, private produtos:ProdutosService, private rotas:Router, private vibracao:Vibration) { }

  ionViewWillEnter(){
    this.id = this.pegarIdBolo.snapshot.params['id'];
    this.produtos.BuacarProdutoPorId(this.id).then(resultado => {
      this.produtoObjeto = resultado;
    });
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

  ngOnInit() { }

}
