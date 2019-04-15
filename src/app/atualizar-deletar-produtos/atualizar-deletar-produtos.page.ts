import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../models/produto';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-atualizar-deletar-produtos',
  templateUrl: './atualizar-deletar-produtos.page.html',
  styleUrls: ['./atualizar-deletar-produtos.page.scss'],
})
export class AtualizarDeletarProdutosPage implements OnInit {

  id;
  foto;
  listaProdutos: Produto;
  constructor(private msgAlerta:AlertController,private rotas:Router, private pegarIdBolo:ActivatedRoute, private produto:ProdutosService, private camera:Camera) { }

  ngOnInit() {
    this.id = this.pegarIdBolo.snapshot.params['id'];
    this.produto.BuacarProdutoPorId(this.id).then(resultado => {
      resultado.forEach(element => {
        this.listaProdutos = element;
        this.foto = this.listaProdutos.imagem;
      });
    });
  }

  editar(){
   try {
    this.listaProdutos.imagem = this.foto;
    this.produto.editarProdutos(this.listaProdutos, this.id);

    
    alert('Produto Editado com Sucesso!');
    this.rotas.navigateByUrl('lista-produtos-cadastrados');
   } catch (error) {
     alert('Erro ao Editar Produto!');
   }
  }
  
  deletarProduto(){
    try {
      this.produto.deletarProduto(this.id);
      alert('Produto Deletado com Sucesso!');
      this.rotas.navigateByUrl('lista-produtos-cadastrados');
    } catch (error) {
      alert('Erro ao Deletar Produto!');
    }
  }

  tiraFoto(){
    const options: CameraOptions = {
      cameraDirection: this.camera.Direction.BACK,
      allowEdit: true,
      quality: 100,
      saveToPhotoAlbum: false,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
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
