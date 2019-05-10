import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AtualizarMonteSeuBoloPage } from './atualizar-monte-seu-bolo.page';
import { ServicesModule } from '../services/services.module';
import { Camera } from '@ionic-native/camera/ngx';

const routes: Routes = [
  {
    path: '',
    component: AtualizarMonteSeuBoloPage
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
  declarations: [AtualizarMonteSeuBoloPage],
  providers:[Camera]
})
export class AtualizarMonteSeuBoloPageModule {}
