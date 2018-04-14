import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Semestre } from '../../models/model.semestre';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the SemestreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SemestreProvider {

  nomeSemestre: any;
  dataInicioSemestre: any;
  dataFimSemestre: any;

  constructor(public http: HttpClient) {
    console.log('Hello SemestreProvider Provider');
  }

  create(semestre: Semestre) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/semestre/cadastrar/', semestre).subscribe(response => {
        resolve(response);
      });
    });
  }

}
