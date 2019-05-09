import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Produto } from '../models/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private db: firebase.database.Reference;

  constructor() {
    let userID = firebase.auth().currentUser.uid;
    this.db = firebase.database().ref('Produtos').child(userID);
  }

  cadastrar(produto: Produto) {
    let uid = this.db.push().key;
    produto.id = uid;
    this.db.child(uid).set(produto);
  }

  async buscarTodos(): Promise<Produto[]> {
    return this.db.once('value').then(snapshot => {
      let produtos = [];
      snapshot.forEach(produto => {
        produtos.push(produto.val());
      })

      return produtos;
    });
  }

  async buscar(id: string): Promise<Produto> {
    return this.db.child(id).once('value').then(snapshot => {
      if (snapshot.exists())
        return snapshot.val();
      return null;
    });
  }

  editar(produto: Produto) {
    this.db.child(produto.id).set(produto);
  }

  excluir (id: string) {
    this.db.child(id).remove();
  }

}
