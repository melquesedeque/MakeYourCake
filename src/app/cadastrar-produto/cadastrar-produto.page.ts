import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutosService } from '../services/produtos.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.page.html',
  styleUrls: ['./cadastrar-produto.page.scss'],
})
export class CadastrarProdutoPage implements OnInit {

  formulario:FormGroup;
  foto:string = "../../assets/img/foto.png";
  constructor(private formbuilder:FormBuilder, private produtos:ProdutosService,private camera:Camera) { }

  ngOnInit() {
    this.formulario = this.formbuilder.group({
      titulo:[null,[Validators.required]],
      descricao:[null,[Validators.required]],
      valor:[null,[Validators.required]],
      imagem:[null,[Validators.required]],
    });
  }

  cadastrar(){
    this.produtos.cadastrarProduto(this.formulario.value).then(() =>{
      alert("sucesso");
    }).catch((erro) => alert(erro));
  }

  tiraFoto(){
    const options: CameraOptions = {
      cameraDirection: this.camera.Direction.BACK,
      allowEdit: true,
      quality: 100,
      saveToPhotoAlbum: false,
      destinationType: this.camera.DestinationType.FILE_URI,
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

}
