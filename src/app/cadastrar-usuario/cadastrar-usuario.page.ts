import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { AutenticarGuardGuard } from '../VerificarURL/autenticar-guard.guard';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.page.html',
  styleUrls: ['./cadastrar-usuario.page.scss'],
})
export class CadastrarUsuarioPage implements OnInit {

  formulario:FormGroup;

  constructor(private formBilder:FormBuilder,private user:UsuarioService, private rotas:Router,private menuBarra:MenuController) { }

  ngOnInit() {
   this.formulario = this.formBilder.group({
      nome:[null,[Validators.required]],
      email:[null,[Validators.required, Validators.email]],
      senha:[null,[Validators.required, Validators.minLength(6)]]
   });
  }

  ionViewWillEnter() {
    this.menuBarra.enable(false); //Desabilita
  }

  cadastrar(){
    this.user.insert(this.formulario.value).then(() => {
      this.rotas.navigateByUrl("/consultar-produtos");
      AutenticarGuardGuard.podeAcessar = true;
    }).catch(() => {
      alert('Erro ao Cadastrar Usuário');
    })
  }

}
