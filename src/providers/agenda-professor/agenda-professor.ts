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
    return this.http.get('http://backfisio.herokuapp.com/agendaProfessor/listarPeriodo').toPromise();
  }

  gravarAgenda(agenda){
    var rota = "inserirAgenda";
      if(agenda.idagendaprofessor != ""){
        rota = "editarAgenda";
      }
      return new Promise((resolve, reject) => {
        this.http.post('http://backfisio.herokuapp.com/agendaProfessor/' + rota, agenda).subscribe(response => {
          resolve(response);
        });
      });
    }
  listarAgenda(idprofessor){
    return new Promise((resolve, reject) => {
      this.http.post('http://backfisio.herokuapp.com/agendaProfessor/listarAgenda', idprofessor).subscribe(response => {
        resolve(response);
      });
    });
  }

  /*    var rota = "cadastrar";
    if (professor.idProfessor != ""){
      rota = "editar";
    } */
}