import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { AutenticarGuardGuard } from '../VerificarURL/autenticar-guard.guard';
import { MenuController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.page.html',
  styleUrls: ['./cadastrar-usuario.page.scss'],
})
export class CadastrarUsuarioPage implements OnInit {

  id;
  formulario: FormGroup;

  constructor(private formBilder: FormBuilder, private user: UsuarioService, private rotas: Router, private menuBarra: MenuController) { }

  ngOnInit() {
    this.formulario = this.formBilder.group({
      nome: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  ionViewWillEnter() {
    this.menuBarra.enable(false); //Desabilita
  }

  cadastrar() {

    firebase.auth().createUserWithEmailAndPassword(this.formulario.get('email').value, this.formulario.get('senha').value).then(usuarioLogado => {
      if (usuarioLogado != null) {
        AutenticarGuardGuard.podeAcessar = true;

        var user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: this.formulario.get('nome').value,
        }).then(certo => this.rotas.navigateByUrl('/consultar-produtos')).catch(erro => alert("Erro ao Tentar se Cadastrar!"));
      }
    }).catch(erro => {
      alert("Erro ao tentar se Cadastrar!");
    })
  }

}