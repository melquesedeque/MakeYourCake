import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class BancoService {

  constructor(private sqlite: SQLite, platform: Platform) { 
    platform.ready().then(() => this.createDB());
  }

  protected getDB() {
    return this.sqlite.create({
      name: 'monte_seu_bolo_banco.db',
      location: 'default'
    });
  }

  private createDB() {
    this.getDB().then((db:SQLiteObject) => {
      //Criando Tabela Usuários
      db.executeSql("CREATE TABLE IF NOT EXISTS usuarios(\
        id INTEGER PRIMARY KEY AUTOINCREMENT,\
        nome TEXT,\
        email TEXT,\
        senha TEXT\
        )", []);

        //Criando Tabela de Produtos
      db.executeSql("CREATE TABLE IF NOT EXISTS produtos(\
        id INTEGER PRIMARY KEY AUTOINCREMENT,\
        titulo TEXT,\
        descricao TEXT,\
        valor TEXT,\
        imagem TEXT\
        )", []);
    });
  }
}