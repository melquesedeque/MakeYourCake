import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { MonteSeuBolo } from '../models/monte-seu-bolo';

@Injectable({
  providedIn: 'root'
})
export class MonteSeuBoloService {

  private db: firebase.database.Reference;

  constructor() {
    let userID = firebase.auth().currentUser.uid;
    this.db = firebase.database().ref('MonteSeuBolo').child(userID);
  }

  cadastrar(bolo:MonteSeuBolo) {
    let uid = this.db.push().key;
    bolo.id = uid;
    this.db.child(uid).set(bolo);
  }

  async buscar(id: string): Promise<MonteSeuBolo> {
    return this.db.child(id).once('value').then(snapshot => {
      if (snapshot.exists())
        return snapshot.val();
      return null;
    });
  }

  async buscarTodos(): Promise<MonteSeuBolo[]> {
    return this.db.once('value').then(snapshot => {
      let bolos = [];
      snapshot.forEach(bolo => {
        bolos.push(bolo.val());
      })

      return bolos;
    });
  }

  editar(bolo: MonteSeuBolo) {
    this.db.child(bolo.id).set(bolo);
  }

  testecadastro(){
    var monteSeuBolo:MonteSeuBolo = new MonteSeuBolo;
    monteSeuBolo.tamanhoBoloImagem01 = "../../assets/img/icon_monte.png";
    monteSeuBolo.tamanhoBoloNome01 = "Teste";
    monteSeuBolo.tamanhoBoloImagem02 = "../../assets/img/icon_monte.png";
    monteSeuBolo.tamanhoBoloNome02 = "Teste";
    monteSeuBolo.tamanhoBoloImagem03 = "../../assets/img/icon_monte.png";
    monteSeuBolo.tamanhoBoloNome03 = "Teste";
    monteSeuBolo.tamanhoBoloImagem04 = "../../assets/img/icon_monte.png";
    monteSeuBolo.tamanhoBoloNome04 = "Teste";

    monteSeuBolo.massaImagem01 = "../../assets/img/icon_monte.png";
    monteSeuBolo.massaNome01 = "teste";
    monteSeuBolo.massaImagem02 = "../../assets/img/icon_monte.png";
    monteSeuBolo.massaNome02 = "teste";
    monteSeuBolo.massaImagem03 = "../../assets/img/icon_monte.png";
    monteSeuBolo.massaNome03 = "teste";
    monteSeuBolo.massaImagem04 = "../../assets/img/icon_monte.png";
    monteSeuBolo.massaNome04 = "teste";

    monteSeuBolo.recheioImagem01 = "../../assets/img/icon_monte.png";
    monteSeuBolo.recheioNome01 = "teste";
    monteSeuBolo.recheioImagem02 = "../../assets/img/icon_monte.png";
    monteSeuBolo.recheioNome02 = "teste";
    monteSeuBolo.recheioImagem03 = "../../assets/img/icon_monte.png";
    monteSeuBolo.recheioNome03 = "teste";
    monteSeuBolo.recheioImagem04 = "../../assets/img/icon_monte.png";
    monteSeuBolo.recheioNome04 = "teste";

    monteSeuBolo.ToppingsImagem01 = "../../assets/img/icon_monte.png";
    monteSeuBolo.ToppingsNome01 = "teste";
    monteSeuBolo.ToppingsImagem02 = "../../assets/img/icon_monte.png";
    monteSeuBolo.ToppingsNome02 = "teste";
    monteSeuBolo.ToppingsImagem03 = "../../assets/img/icon_monte.png";
    monteSeuBolo.ToppingsNome03 = "teste";
    monteSeuBolo.ToppingsImagem04 = "../../assets/img/icon_monte.png";
    monteSeuBolo.ToppingsNome04 = "teste";

    this.cadastrar(monteSeuBolo);
  }
}
