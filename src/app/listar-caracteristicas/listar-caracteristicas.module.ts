import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListarCaracteristicasPage } from './listar-caracteristicas.page';

const routes: Routes = [
  {
    path: '',
    component: ListarCaracteristicasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListarCaracteristicasPage]
})
export class ListarCaracteristicasPageModule {}
