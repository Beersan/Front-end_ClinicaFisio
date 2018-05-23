import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Semestre } from '../../models/model.semestre';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SemestreProvider {

  nomeSemestre: any;
  dataInicioSemestre: any;
  dataFimSemestre: any;

  constructor(
    public http: HttpClient
  ) {}

  create(semestre: Semestre) {
    var rota = "cadastrar";
    if (semestre.idSemestre != ""){
      rota = "editar";
    }
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/semestre/' + rota, semestre).subscribe(response => {
        resolve(response);
      });
    });
  }

  retornarEstagiario(){    
    return this.http.get('https://backfisio.herokuapp.com/semestre/listar').toPromise();
  }

  excluirEstagiario(idSemestre){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/semestre/excluir', idSemestre).subscribe(response => {
        resolve(response);
      });
    });
  }

}
