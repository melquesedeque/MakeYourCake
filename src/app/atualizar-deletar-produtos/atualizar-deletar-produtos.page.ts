import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../models/produto';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-atualizar-deletar-produtos',
  templateUrl: './atualizar-deletar-produtos.page.html',
  styleUrls: ['./atualizar-deletar-produtos.page.scss'],
})
export class AtualizarDeletarProdutosPage implements OnInit {

  id;
  foto;
  listaProduto: Produto = new Produto;
  loading;
  constructor(private loadingController: LoadingController, private msgAlerta:AlertController,private rotas:Router, private pegarIdBolo:ActivatedRoute, private produtosService:ProdutosService, private camera:Camera) { }

  ionViewWillEnter(){
    this.carregando();
    this.id = this.pegarIdBolo.snapshot.params['id'];
    this.produtosService.buscar(this.id).then(resultado => {
        this.listaProduto = resultado;
        this.foto = this.listaProduto.imagem;
        this.loading.dismiss();
    });
  }

  async carregando() {
    this.loading = await this.loadingController.create({
      message: 'Carregando...',
    });
    await this.loading.present();
  }

  ngOnInit() { }

   editar(){
   try {
    this.listaProduto.imagem = this.foto;
    this.produtosService.editar(this.listaProduto);
    alert('Produto Editado com Sucesso!');
    this.rotas.navigateByUrl('lista-produtos-cadastrados');
   } catch (error) {
     alert('Erro ao Editar Produto!');
   }
  }
  
  deletarProduto(){
    try {
      this.produtosService.excluir(this.id);
      alert('Produto Deletado com Sucesso!');
      this.rotas.navigateByUrl('lista-produtos-cadastrados');
    } catch (error) {
      alert('Erro ao Deletar Produto!');
    }
  }

  tiraFoto(){
    const options: CameraOptions = {
      cameraDirection: this.camera.Direction.BACK,
      allowEdit: false,
      quality: 100,
      saveToPhotoAlbum: false,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    
    this.camera.getPicture(options).then((imageData) => {
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.foto = base64Image;
    }, (err) => {
      alert("Erro");
    });
  }

  async atualizar() {
    const alert = await this.msgAlerta.create({
      header: 'Atenção!',
      message: 'Você Realmente Deseja Editar este Produto?',
      buttons: [{text:'Cancelar'},{text:'Editar', handler: () =>{
        this.editar();
      } }]
    });
  
    await alert.present();
  }
  
  async excluir() {
    const alert = await this.msgAlerta.create({
      header: 'Atenção!',
      message: 'Você Realmente Deseja Deletar este Produto?',
      buttons: [{text:'Cancelar'},{text:'Deletar', handler: () =>{
        this.deletarProduto();
      } }]
    });
  
    await alert.present();
  }
}
