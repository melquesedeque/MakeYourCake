import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticarGuardGuard } from './VerificarURL/autenticar-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'consultar-produtos/:id',loadChildren: './consultar-produtos/consultar-produtos.module#ConsultarProdutosPageModule' },
  { path: 'listar-caracteristicas/:id',loadChildren: './listar-caracteristicas/listar-caracteristicas.module#ListarCaracteristicasPageModule' },
  { path: 'cadastrar-usuario',loadChildren: './cadastrar-usuario/cadastrar-usuario.module#CadastrarUsuarioPageModule' },
  { path: 'monte-seu-bolo',loadChildren: './monte-seu-bolo/monte-seu-bolo.module#MonteSeuBoloPageModule' },
  { path: 'finalizar-pedido-monte',loadChildren: './finalizar-pedido-monte/finalizar-pedido-monte.module#FinalizarPedidoMontePageModule' },
  { path: 'cadastrar-produto',  canActivate:[AutenticarGuardGuard] ,loadChildren: './cadastrar-produto/cadastrar-produto.module#CadastrarProdutoPageModule' },
  { path: 'atualizar-deletar-produtos/:id',  canActivate:[AutenticarGuardGuard] ,loadChildren: './atualizar-deletar-produtos/atualizar-deletar-produtos.module#AtualizarDeletarProdutosPageModule' },
  { path: 'lista-produtos-cadastrados',  canActivate:[AutenticarGuardGuard] ,loadChildren: './lista-produtos-cadastrados/lista-produtos-cadastrados.module#ListaProdutosCadastradosPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
