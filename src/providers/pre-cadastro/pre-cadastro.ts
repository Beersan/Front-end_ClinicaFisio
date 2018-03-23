import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PreCadastro } from '../../models/model.pre-cadastro';
import { Http } from '@angular/http';

@Injectable()
export class PreCadastroProvider {

  constructor(private http: HttpClient) {
    console.log('Hello PreCadastroProvider Provider');
  }

  create(preCadastro: PreCadastro) {
    console.log(preCadastro);

    // this.http.post('http://localhost:3000/estagiario', preCadastro).subscribe(response => {
    //   console.log('POST Response:', response);
    // });
 
    /*this.http.get('http://localhost:8100/cadastrarEstagiario' + this.name).subscribe(response => {
      console.log('GET Response:', response);
    });*/
  
  }
}
