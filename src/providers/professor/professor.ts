import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Professor } from '../../models/model.cadastrar-professor';

@Injectable()
export class ProfessorProvider {

  nomeprofessor: any;
  matriculaprofessor: any;
  crefitoprofessor: any;
  emailprofessor: any;
  telefoneprofessor: any;
  especialidadeprofessor: any;
  estagio: any;
  descricaohorainicio: any;
  descricaohorafim: any;
  descricaosemana: any;

  constructor(public http: HttpClient) {}
  
  gravarProfessor(professor) {
    var rota = "cadastrar";
    if (professor.idProfessor != ""){
      rota = "editar";
    } 
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/professor/' + rota, professor).subscribe(response => {
        resolve(response);
      });
    });
  }

  retornarProfessor(){  
    return this.http.get('https://backfisio.herokuapp.com/professor/listar').toPromise();
  }

  excluirProfessor(idProfessor){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/professor/excluir', idProfessor).subscribe(response => {
        resolve(response);
      });
    });
  }

  listarEspecialidade(){    
    return this.http.get('https://backfisio.herokuapp.com/professor/listarEspecialidade').toPromise();
  }

  listarEstagio(){
    return this.http.get('https://backfisio.herokuapp.com/professor/listarEstagio').toPromise();
  }

  listarAgenda(idProfessor){
    return new Promise((resolve, reject) => {
      this.http.post('http://backfisio.herokuapp.com/professor/agenda', idProfessor).subscribe(response => {
        resolve(response);
      });
    });
  }
}