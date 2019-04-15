import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutosService } from '../services/produtos.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Router } from '@angular/router';
import { getTestBed } from '@angular/core/testing';
import { AutenticarGuardGuard } from '../VerificarURL/autenticar-guard.guard';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.page.html',
  styleUrls: ['./cadastrar-produto.page.scss'],
})
export class CadastrarProdutoPage implements OnInit {
  listaProdutos:any = [];
  formulario:FormGroup;
  foto:string = "../../assets/img/foto.png";
  constructor(private msgAlerta:AlertController, private formbuilder:FormBuilder, private produtos:ProdutosService,private camera:Camera,private rotas:Router) { }

  ngOnInit() {
    this.formulario = this.formbuilder.group({
      titulo:[null,[Validators.required]],
      descricao:[null,[Validators.required]],
      valor:[null,[Validators.required]]
    });
  }

  cadastrar(){
    let valores = this.formulario.value;
    valores.imagem = this.foto;
    this.produtos.cadastrarProduto(valores).then(() =>{
      this.rotas.navigate(['/consultar-produtos',AutenticarGuardGuard.idUsuarioLogado]);
    }).catch((erro) => alert(erro));
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

  async SalvarProduto() {
    const alert = await this.msgAlerta.create({
      header: 'Atenção!',
      message: 'Você Realmente Deseja Cadastrar este Produto?',
      buttons: [{text:'Cancelar'},{text:'Cadastrar', handler: () =>{
        this.cadastrar();
      } }]
    });
  
    await alert.present();
  }
}
