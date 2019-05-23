import { Component, OnInit } from '@angular/core';
import { MonteSeuBolo } from '../models/monte-seu-bolo';
import { MonteSeuBoloService } from '../services/monte-seu-bolo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProdutosService } from '../services/produtos.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-atualizar-monte-seu-bolo',
  templateUrl: './atualizar-monte-seu-bolo.page.html',
  styleUrls: ['./atualizar-monte-seu-bolo.page.scss'],
})
export class AtualizarMonteSeuBoloPage implements OnInit {

  monteSeuBolo:MonteSeuBolo = new MonteSeuBolo;
  id;

  constructor(private boloService:MonteSeuBoloService,private pegarIdBolo:ActivatedRoute,private msgAlerta:AlertController,private rotas:Router,private produtosService:ProdutosService, private camera:Camera) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.id = this.pegarIdBolo.snapshot.params['id'];
    this.boloService.buscar(this.id).then(resultado =>{
      this.monteSeuBolo = resultado;
    });
  }

  editar(){
    try {
     this.boloService.editar(this.monteSeuBolo);
     alert('Bolo Editado com Sucesso!');
     this.rotas.navigateByUrl('monte-seu-bolo');
    } catch (error) {
      alert('Erro ao Editar Produto!');
    }
   }
 
   tiraFoto(tipo:string){
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
      if(tipo == "T01"){
        this.monteSeuBolo.tamanhoBoloImagem01 = base64Image;
      }else if(tipo == "T02"){
        this.monteSeuBolo.tamanhoBoloImagem02 = base64Image;
      }else if(tipo == "T03"){
        this.monteSeuBolo.tamanhoBoloImagem03 = base64Image;
      }else if(tipo == "T04"){
        this.monteSeuBolo.tamanhoBoloImagem04 = base64Image;
      }else if(tipo == "M01"){
        this.monteSeuBolo.massaImagem01 = base64Image;
      }else if(tipo == "M02"){
        this.monteSeuBolo.massaImagem02 = base64Image;
      }else if(tipo == "M03"){
        this.monteSeuBolo.massaImagem03 = base64Image;
      }else if(tipo == "M04"){
        this.monteSeuBolo.massaImagem04 = base64Image;
      }else if(tipo == "R01"){
        this.monteSeuBolo.recheioImagem01 = base64Image;
      }else if(tipo == "R02"){
        this.monteSeuBolo.recheioImagem02 = base64Image;
      }else if(tipo == "R03"){
        this.monteSeuBolo.recheioImagem03 = base64Image;
      }else if(tipo == "R04"){
        this.monteSeuBolo.recheioImagem04 = base64Image;
      }else if(tipo == "TO01"){
        this.monteSeuBolo.ToppingsImagem01 = base64Image;
      }else if(tipo == "TO02"){
        this.monteSeuBolo.ToppingsImagem02 = base64Image;
      }else if(tipo == "TO03"){
        this.monteSeuBolo.ToppingsImagem03 = base64Image;
      }else if(tipo == "TO04"){
        this.monteSeuBolo.ToppingsImagem04 = base64Image;
      }
      
     }, (err) => {
       alert("Erro");
     }).catch(erro =>{
       alert("Erro ao Anexar Imagem " +erro);
     });
   }
 
   async atualizar() {
     const alert = await this.msgAlerta.create({
       header: 'Atenção!',
       message: 'Você Realmente Deseja Editar este Bolo?',
       buttons: [{text:'Cancelar'},{text:'Editar', handler: () =>{
         this.editar();
       } }]
     });
   
     await alert.present();
   }

}
