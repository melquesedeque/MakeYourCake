import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticarGuardGuard } from './VerificarURL/autenticar-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'consultar-produtos', loadChildren: './consultar-produtos/consultar-produtos.module#ConsultarProdutosPageModule' },
  { path: 'listar-caracteristicas/:nomeBolo', loadChildren: './listar-caracteristicas/listar-caracteristicas.module#ListarCaracteristicasPageModule' },
  { path: 'cadastrar-usuario', canActivate:[AutenticarGuardGuard], loadChildren: './cadastrar-usuario/cadastrar-usuario.module#CadastrarUsuarioPageModule' },
  { path: 'monte-seu-bolo', loadChildren: './monte-seu-bolo/monte-seu-bolo.module#MonteSeuBoloPageModule' },
  { path: 'finalizar-pedido-monte', loadChildren: './finalizar-pedido-monte/finalizar-pedido-monte.module#FinalizarPedidoMontePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
