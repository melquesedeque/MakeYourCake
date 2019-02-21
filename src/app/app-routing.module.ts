import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'consultar-produtos', loadChildren: './consultar-produtos/consultar-produtos.module#ConsultarProdutosPageModule' },
  { path: 'listar-caracteristicas', loadChildren: './listar-caracteristicas/listar-caracteristicas.module#ListarCaracteristicasPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
