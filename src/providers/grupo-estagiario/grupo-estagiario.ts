import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastrarGrupoEstagiario } from '../../models/model.cadastrar-grupo-estagiario';

/*
  Generated class for the GrupoEstagiarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GrupoEstagiarioProvider {

  


  constructor(public http: HttpClient) {
    console.log('Hello GrupoEstagiarioProvider Provider');
  }

  retornarGrupo(){
    return this.http.get('http://localhost:3000/grupoestagiario/listargrupo').toPromise();
  }

  retornarEstagiario(){
    return this.http.get('http://localhost:3000/grupoestagiario/listarestagiario').toPromise();
  }

  create(codigos) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/grupoestagiario/cadastrar', codigos).subscribe(response => {
        resolve(response);
      });
    });
  }

}
