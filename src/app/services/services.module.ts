import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from './usuario.service';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { ProdutosService } from './produtos.service';
import { MonteSeuBoloService } from './monte-seu-bolo.service';
import { ComprasService } from './compras.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[UsuarioService, SQLite, ProdutosService, MonteSeuBoloService, ComprasService]
})
export class ServicesModule { }
