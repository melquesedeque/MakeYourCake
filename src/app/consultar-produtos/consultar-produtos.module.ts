import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ConsultarProdutosPage } from './consultar-produtos.page';

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
    RouterModule.forChild(routes)
  ],
  declarations: [ConsultarProdutosPage]
})
export class ConsultarProdutosPageModule {}
