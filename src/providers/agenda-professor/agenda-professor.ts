import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgendaProfessor } from '../../models/model.agenda-professor';

@Injectable()
export class AgendaProfessorProvider {

  professor: any;
  diaSemana: any;
  horaInicio : any;
  horaFim: any;
  periodo: any;

  constructor(public http: HttpClient) {}
  
  listarProfessor(){    
    return this.http.get('https://backfisio.herokuapp.com/agendaProfessor/listarProfessor').toPromise();
  }
  listarDiaSemana(){
    return this.http.get('https://backfisio.herokuapp.com/agendaProfessor/listarDiaSemana').toPromise();
  }
  listarHoraInicio(){
    return this.http.get('https://backfisio.herokuapp.com/agendaProfessor/listarHoraInicio').toPromise();
  }
  listarHoraFim(){
    return this.http.get('https://backfisio.herokuapp.com/agendaProfessor/listarHoraFim').toPromise();
  }
  listarPeriodo(){
    return this.http.get('http://localhost:3000/agendaProfessor/listarPeriodo').toPromise();
  }

  inserirAgenda(agenda){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/agendaProfessor/inserirAgenda', agenda).subscribe(response => {
        resolve(response);
      });
    });
  }
}