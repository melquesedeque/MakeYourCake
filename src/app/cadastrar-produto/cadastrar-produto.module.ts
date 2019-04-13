import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrarProdutoPage } from './cadastrar-produto.page';
import { ServicesModule } from '../services/services.module';
import { Camera } from '@ionic-native/camera/ngx';

const routes: Routes = [
  {
    path: '',
    component: CadastrarProdutoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ServicesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CadastrarProdutoPage],
  providers:[Camera]
})
export class CadastrarProdutoPageModule {}
