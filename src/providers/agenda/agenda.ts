import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agenda } from '../../models/model.agenda';



/*
  Generated class for the AgendaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AgendaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AgendaProvider Provider');
  }

  retornarprofessor(paciente){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/agenda/listarprofessor', paciente).subscribe(response => {
        resolve(response);
      });
    });
  }
  
  retornarPaciente(){
    return this.http.get('https://backfisio.herokuapp.com/agenda/listarpaciente').toPromise();
  }
  
  retornarDia(paciente){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/agenda/listardia', paciente).subscribe(response => {
        resolve(response);
      });
    });
  }
  
  retornarHorario(paciente){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/agenda/listarhorario', paciente).subscribe(response => {
        
        resolve(response);
      });
    });
  }

  create(agenda: Agenda) {
    console.log(agenda);
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/agenda/cadastrar', agenda).subscribe(response => {
        resolve(response);
      });
    });
  }

  retornarAgenda(){
    return this.http.get('https://backfisio.herokuapp.com/agenda/listar').toPromise();
  }

}
