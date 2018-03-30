import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastrarGrupo } from '../../models/model.cadastrar-grupo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the GrupoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GrupoProvider {

  descricaogrupo: any;
  
  constructor(public http: HttpClient) {
    console.log('Hello GrupoProvider Provider');
  }

  create(grupo: CadastrarGrupo) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/grupo/cadastrar', grupo).subscribe(response => {
        resolve(response);
        console.log(grupo);

      });
    });
  }

}
