import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, MenuController } from '@ionic/angular';

import { LoginPage } from './login.page';
import { ServicesModule } from '../services/services.module';
import { AdMobFree } from '@ionic-native/admob-free/ngx';
import { GooglePlus } from '@ionic-native/google-plus/ngx'
const routes: Routes = [
  {
    path: '',
    component: LoginPage
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
  declarations: [LoginPage],
  providers:[AdMobFree, GooglePlus]
})
export class LoginPageModule {

  constructor(private menu:MenuController){}

  ionViewWillEnter(){
    this.menu.enable(false);
  }

}
