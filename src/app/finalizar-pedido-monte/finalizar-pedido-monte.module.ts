import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FinalizarPedidoMontePage } from './finalizar-pedido-monte.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizarPedidoMontePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FinalizarPedidoMontePage]
})
export class FinalizarPedidoMontePageModule {}
