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

  constructor(public http: HttpClient) {}
  
  professorProvider(professor: Professor) {
    var rota = "cadastrar";
    if (professor.idProfessor != ""){
      rota = "editar";
    }
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/professor/' + rota, professor).subscribe(response => {
        resolve(response);
      });
    });
  }
  retornarProfessor(){  
    return this.http.get('http://localhost:3000/professor/listar').toPromise();
  }

  excluirProfessor(idProfessor){
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/professor/excluir', idProfessor).subscribe(response => {
        resolve(response);
      });
    });
  }
  listar(){    
    return this.http.get('http://localhost:3000/professor/listarEspecialidade').toPromise();
  }
}
