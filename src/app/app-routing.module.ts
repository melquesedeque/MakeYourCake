import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticarGuardGuard } from './VerificarURL/autenticar-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'consultar-produtos', canActivate:[AutenticarGuardGuard] ,loadChildren: './consultar-produtos/consultar-produtos.module#ConsultarProdutosPageModule' },
  { path: 'listar-caracteristicas/:nomeBolo', canActivate:[AutenticarGuardGuard] ,loadChildren: './listar-caracteristicas/listar-caracteristicas.module#ListarCaracteristicasPageModule' },
  { path: 'cadastrar-usuario', canActivate:[AutenticarGuardGuard], loadChildren: './cadastrar-usuario/cadastrar-usuario.module#CadastrarUsuarioPageModule' },
  { path: 'monte-seu-bolo', canActivate:[AutenticarGuardGuard], loadChildren: './monte-seu-bolo/monte-seu-bolo.module#MonteSeuBoloPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
