import { Injectable } from '@angular/core';
import { BancoService } from './banco.service';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService extends BancoService{

  public cadastrarProduto(produto){
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql("INSERT INTO produtos (titulo, descricao, valor, imagem) VALUES (?,?,?)", 
      [produto.titulo, produto.descicao, produto.valor, produto.imagem]);
    });
  }
}
