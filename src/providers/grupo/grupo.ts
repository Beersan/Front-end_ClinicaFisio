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
    var rota = "cadastrar";
    if (grupo.idGrupo != ""){
      rota = "editar";
    }
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/grupo/' + rota, grupo).subscribe(response => {
        resolve(response);
      });
    });
  }

  retornarGrupo(){    
    return this.http.get('http://localhost:3000/grupo/listar').toPromise();
  }

  excluirEstagiario(idGrupo){
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/grupo/excluir', idGrupo).subscribe(response => {
        resolve(response);
      });
    });
  }

}
