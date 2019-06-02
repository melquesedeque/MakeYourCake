import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Compras } from '../models/compras';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private db: firebase.database.Reference;

  constructor() {
    this.db = firebase.database().ref('Compras');
  }

  cadastrar(compras: Compras) {
    let IdCliete = firebase.auth().currentUser.uid;
    let uid = this.db.push().key;
    this.db.child(IdCliete).child(uid).set(compras);
  }

  async buscarTodosPorID(id:string): Promise<Compras[]> {
    return this.db.child(id).once('value').then(snapshot => {
      let produtos = [];
      snapshot.forEach(produto => {
        produtos.push(produto.val());
      })

      return produtos;
    });
  }
}
