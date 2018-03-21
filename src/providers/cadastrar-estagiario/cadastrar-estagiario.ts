import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estagiario } from '../../models/model.cadastrar-estagiario';

/*
  Generated class for the CadastrarEstagiarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadastrarEstagiarioProvider {

  constructor() {
    console.log('Hello CadastrarEstagiarioProvider Provider');
  }

  create(estagiario: Estagiario) {
    //console.log(this.nomeEstagiario + " " + this.numeroMatricula + " " + this.telefone + " " + this.email);
    console.log(estagiario);
    //return this.itemsCollection.add(post);
  }



}
