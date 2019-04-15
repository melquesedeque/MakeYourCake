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

  id;
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
    this.user.insert(this.formulario.value).then(() => {}).catch(() => {
      alert('Erro ao Cadastrar Usuário');
    });

    this.user.buscarTodosUsuarios().then(resultados =>{
      resultados.forEach(usuario => {
        if(usuario.email == this.formulario.get('email').value && usuario.senha == this.formulario.get('senha').value){
          this.id = usuario.id;
        }
      });
    });

    this.rotas.navigate(['/consultar-produtos',this.id]);
    AutenticarGuardGuard.podeAcessar = true;
    AutenticarGuardGuard.idUsuarioLogado = this.id;
  }

}