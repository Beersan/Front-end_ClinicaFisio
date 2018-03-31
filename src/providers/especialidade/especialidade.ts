import { HttpClient } from '@angular/common/http';
import { Injectable, Component, ViewChild } from '@angular/core';
import { Especialidade } from '../../models/model.cadastrar-especialidade';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http'


import { HomePage } from '../../pages/home/home';

/*
  Generated class for the CadastrarEspecialidadeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadastrarEspecialidadeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CadastrarEspecialidadeProvider Provider');
  }

  create(especialidade: Especialidade) {
    //const data = JSON.stringify(especialidade);
    //console.log(especialidade);

    this.http.post('http://localhost:3000/especialidade/cadastrar', especialidade).subscribe(response => {
      //console.log(especialidade);
    });

    /*this.http.get('http://localhost:8100/cadastrarEspecialidade' + this.name).subscribe(response => {
      console.log('GET Response:', response);
    });*/


    //console.log(this.descricaoEspecialidade);
  }
}