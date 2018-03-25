import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Especialidade } from '../../models/model.especialidade';
import { Http } from '@angular/http';

/*
  Generated class for the CadastrarEspecialidadeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadastrarEspecialidadeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CadastrarEspecialidadeProvider Provider');
  }

  create(especialidade: Especialidade) {
    //const data = JSON.stringify(especialidade);
    //console.log(especialidade);

    this.http.post('http://localhost:3000/especialidade/cadastrar', especialidade).subscribe(response => {
      //console.log(especialidade);
    });

    /*this.http.get('http://localhost:8100/cadastrarEspecialidade' + this.name).subscribe(response => {
      console.log('GET Response:', response);
    });*/


    //console.log(this.descricaoEspecialidade);
  }
}
