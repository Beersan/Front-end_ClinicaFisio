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

  create(grupo) {
    var rota = "cadastrar";
    if (grupo.idGrupo != ""){
      rota = "editar";
    }
    console.log(grupo);
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/grupo/' + rota, grupo).subscribe(response => {
        resolve(response);
      });
    });
  }

  retornarGrupo(){    
    return this.http.get('https://backfisio.herokuapp.com/grupo/listar').toPromise();
  }

  excluirEstagiario(idGrupo){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/grupo/excluir', idGrupo).subscribe(response => {
        resolve(response);
      });
    });
  }

  retornarSemestre(){
    return this.http.get('https://backfisio.herokuapp.com/grupo/listarsemestre').toPromise();
  }

}
