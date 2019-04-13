import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsultarProdutosPage } from './consultar-produtos.page';
import { ServicesModule } from '../services/services.module';

const routes: Routes = [
  {
    path: '',
    component: ConsultarProdutosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ServicesModule
  ],
  declarations: [ConsultarProdutosPage]
})
export class ConsultarProdutosPageModule {}
