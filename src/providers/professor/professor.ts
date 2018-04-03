import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Professor } from '../../models/model.cadastrar-professor';

/*
  Generated class for the ProfessorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfessorProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProfessorProvider Provider');
  }

  // Gabriel - 02/08 9h
  // faz o create aqui...

  gravarProfessor(professor: Professor){

  }

}
