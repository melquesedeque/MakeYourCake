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
     alert('Produto Editado com Sucesso!');
     this.rotas.navigateByUrl('monte-seu-bolo');
    } catch (error) {
      alert('Erro ao Editar Produto!');
    }
   }
 
   /* tiraFoto(){
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
   } */
 
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

}
