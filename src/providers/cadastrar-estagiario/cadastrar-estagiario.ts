import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  create(post: Post) {
    //console.log(this.nomeEstagiario + " " + this.numeroMatricula + " " + this.telefone + " " + this.email);
    console.log(post);
    //return this.itemsCollection.add(post);
  }



}
