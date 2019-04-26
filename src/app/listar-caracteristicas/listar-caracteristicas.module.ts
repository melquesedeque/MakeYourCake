import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListarCaracteristicasPage } from './listar-caracteristicas.page';
import { ServicesModule } from '../services/services.module';
import { Vibration } from '@ionic-native/vibration/ngx';

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
    ServicesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListarCaracteristicasPage],
  providers:[Vibration]
})
export class ListarCaracteristicasPageModule {}
