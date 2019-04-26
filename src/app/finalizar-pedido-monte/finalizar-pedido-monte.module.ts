import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FinalizarPedidoMontePage } from './finalizar-pedido-monte.page';
import { Vibration } from '@ionic-native/vibration/ngx';

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
  declarations: [FinalizarPedidoMontePage],
  providers:[Vibration]
})
export class FinalizarPedidoMontePageModule {}
