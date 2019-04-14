import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AtualizarDeletarProdutosPage } from './atualizar-deletar-produtos.page';
import { Camera } from '@ionic-native/camera/ngx';
import { ServicesModule } from '../services/services.module';

const routes: Routes = [
  {
    path: '',
    component: AtualizarDeletarProdutosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    ServicesModule
  ],
  declarations: [AtualizarDeletarProdutosPage],
  providers:[Camera]
})
export class AtualizarDeletarProdutosPageModule {}
