import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MonteSeuBoloPage } from './monte-seu-bolo.page';

const routes: Routes = [
  {
    path: '',
    component: MonteSeuBoloPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MonteSeuBoloPage]
})
export class MonteSeuBoloPageModule {}
