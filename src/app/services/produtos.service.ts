import { Injectable } from '@angular/core';
import { BancoService } from './banco.service';
import { SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService extends BancoService{

  public cadastrarProduto(produto){
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql("INSERT INTO produtos (titulo, descricao, valor, imagem) VALUES (?,?,?,?)", 
      [produto.titulo, produto.descricao, produto.valor, produto.imagem]);
    });
  }

  public getAll(): Promise<any> {
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql("SELECT * FROM produtos", []).then(resultado => {
        let retornar = [];
        if (resultado.rows.length > 0) {
          for(let i = 0; i < resultado.rows.length; i++) {
            retornar.push(resultado.rows.item(i));
          }
        }
        return retornar;
      })
    });
  }

  public BuacarProdutoPorId(id): Promise<any> {
    return this.getDB().then((db:SQLiteObject) => {
      return db.executeSql("SELECT * FROM produtos WHERE id = ?", [id]).then(resultado => {
        let retornar = [];
        if (resultado.rows.length > 0) {
          for(let i = 0; i < resultado.rows.length; i++) {
            retornar.push(resultado.rows.item(i));
          }
        }
        return retornar;
      })
    });
  }

  public editarProdutos(obj: Object, id:any) {

    let key = Object.keys(obj);
    let values = Object.values(obj);
    let campos:string[] = [];
    key.forEach((k, i) => {
      campos.push(k + ' = ?');
    }) 
    values.push(id);
    
    this.getDB().then((db:SQLiteObject) => {
      db.executeSql("UPDATE produtos" + " SET " + campos.join(', ') + " WHERE id = ?", values);
      return true;
    });
  }

  public deletarProduto(id:any) {
    this.getDB().then((db:SQLiteObject) => {
      db.executeSql("DELETE FROM produtos WHERE id = ?", [id]);
    });
  }
}
