import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastrarGrupo } from '../../models/model.cadastrar-grupo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GrupoProvider {

  descricaogrupo: any;
  
  constructor(public http: HttpClient) {
  }

  create(grupo) {
    var rota = "cadastrar";
    if (grupo.idGrupo != ""){
      rota = "editar";
    }
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
}
