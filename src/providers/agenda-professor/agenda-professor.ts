import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgendaProfessor } from '../../models/model.agenda-professor';

@Injectable()
export class AgendaProfessorProvider {

  professor: any;
  diaSemana: any;
  horaInicio : any;
  horaFim: any;

  constructor(public http: HttpClient) {}
  
  listarProfessor(){    
    return this.http.get('http://localhost:3000/agendaProfessor/listarProfessor').toPromise();
  }
  listarDiaSemana(){
    return this.http.get('http://localhost:3000/agendaProfessor/listarDiaSemana').toPromise();
  }
  listarHoraInicio(){
    return this.http.get('http://localhost:3000/agendaProfessor/listarHoraInicio').toPromise();
  }
  listarHoraFim(){
    return this.http.get('http://localhost:3000/agendaProfessor/listarHoraFim').toPromise();
  }
  inserirAgenda(agenda){
    return new Promise((resolve, reject) => {
      return this.http.get('http://localhost:3000/agendaProfessor/inserirAgenda', agenda).subscribe(response => {
        resolve(response);
      });
    });
  }
}