import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastrarGrupoEstagiario } from '../../models/model.cadastrar-grupo-estagiario';

@Injectable()
export class GrupoEstagiarioProvider {

  constructor(public http: HttpClient) {}

  retornarGrupo(){
    return this.http.get('http://localhost:3000/grupoestagiario/listargrupo').toPromise();
  }

  retornarEstagiario(){
    return this.http.get('http://localhost:3000/grupoestagiario/listarestagiario').toPromise();
  }

  retornarGrupoEstagiario(){
    return this.http.get('http://localhost:3000/grupoestagiario/listargrupoestagiario').toPromise();
  }

  create(codigos) {
    
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/grupoestagiario/cadastrar', codigos).subscribe(response => {
        resolve(response);
      });
    });
  }

  excluirGrupoEstagiario(idgrupo){
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/grupoestagiario/excluir', idgrupo).subscribe(response => {
        resolve(response);
      });
    });
  }

  retornarEstagiarioEditar(idGrupo){
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/grupoestagiario/listarestagiarioseditar', idGrupo).subscribe(response => {
        resolve(response);
      });
    });
  }

  
}
