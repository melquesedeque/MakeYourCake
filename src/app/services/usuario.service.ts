import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private db: firebase.database.Reference;

  constructor() {
    this.db = firebase.database().ref('ContaUsuario');
  }

  cadastrar(usuario: Usuario) {
    let uid = this.db.push().key;
    usuario.id = uid;
    this.db.child(uid).set(usuario);
  }

  editar(usuario: Usuario) {
    this.db.child(usuario.id).set(usuario);
  }

  async buscar(id: string): Promise<Usuario> {
    return this.db.child(id).once('value').then(snapshot => {
      if (snapshot.exists())
        return snapshot.val();
      return null;
    });
  }

  async buscarEmail(email: string): Promise<Usuario> {
    return this.db.orderByChild('email').equalTo(email).once('value').then(snapshot => {
      if (snapshot.exists()) {
        let resultado = snapshot.val();
        let chave = Object.keys(resultado)[0];
        return resultado[chave];
      }
      return null;
    });
  }

  async buscarTodoUsuario(): Promise<Usuario[]> {
    return this.db.once('value').then(snapshot => {
      let usuarios = [];
      snapshot.forEach(usuario => {
        usuarios.push(usuario.val());
      })

      return usuarios;
    });
  }
}
