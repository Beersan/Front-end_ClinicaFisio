import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estagiario } from '../../models/model.cadastrar-estagiario';
import { Http } from '@angular/http';

/*
  Generated class for the CadastrarEstagiarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadastrarEstagiarioProvider {

  constructor(private http: HttpClient) {
    console.log('Hello CadastrarEstagiarioProvider Provider');
  }

  create(estagiario: Estagiario) {
    const data = JSON.stringify(estagiario);
    console.log(estagiario);

    this.http.post('http://localhost:3000/estagiario', data).subscribe(response => {
      console.log('POST Response:', response);
    });
 
    /*this.http.get('http://localhost:8100/cadastrarEstagiario' + this.name).subscribe(response => {
      console.log('GET Response:', response);
    });*/
    

    //console.log(this.nomeEstagiario + " " + this.numeroMatricula + " " + this.telefone + " " + this.email);
  }
}
