import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastrarGrupoEstagiario } from '../../models/model.cadastrar-grupo-estagiario';

@Injectable()
export class GrupoEstagiarioProvider {

  constructor(public http: HttpClient) {}

  retornarGrupo(){
    return this.http.get('https://backfisio.herokuapp.com/grupoestagiario/listargrupo').toPromise();
  }

  retornarEstagiario(){
    return this.http.get('https://backfisio.herokuapp.com/grupoestagiario/listarestagiario').toPromise();
  }

  retornarEstagio(){
    return this.http.get('https://backfisio.herokuapp.com/grupoestagiario/listarestagio').toPromise();
  }

  alterarEstagio(idgrupo) {
    console.log(idgrupo);
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/grupoestagiario/alterarestagio', idgrupo).subscribe(response => {
        resolve(response);
      });
    });
  }

  createAlterarEstagio(grupo) {
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/grupoestagiario/cadastrarnovoestagio', grupo).subscribe(response => {
        resolve(response);
      });
    });
  }

  retornarGrupoEstagiario(){
    return this.http.get('https://backfisio.herokuapp.com/grupoestagiario/listargrupoestagiario').toPromise();
  }

  retornarGrupoEstagiarioComId(idgrupo){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/grupoestagiario/listargrupoestagiariocomid', idgrupo).subscribe(response => {
        resolve(response);
      });
    });
  }

  create(codigo) {
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/grupoestagiario/cadastrar', codigo).subscribe(response => {
        resolve(response);
      });
    });
  }

  excluirGrupoEstagiario(idgrupo){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/grupoestagiario/excluir', idgrupo).subscribe(response => {
        resolve(response);
      });
    });
  }

  retornarEstagiarioEditar(idGrupo){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/grupoestagiario/listarestagiarioseditar', idGrupo).subscribe(response => {
        resolve(response);
      });
    });
  }

   /*retornarProfessor(professor: any){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/grupoestagiario/listarprofessor', professor).subscribe(response => {
        resolve(response);
      });
    });
  }*/
}