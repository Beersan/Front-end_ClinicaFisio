import { HttpClient } from '@angular/common/http';
import { Injectable, Component, ViewChild } from '@angular/core';
import { RelatarProblema } from '../../models/model.relatarProblemas';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http'


import { HomePage } from '../../pages/home/home';

/*
  Generated class for the ProblemaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RelatarProblemaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProblemaProvider Provider');
  }

  create(problema: RelatarProblema) {
    //const data = JSON.stringify(problema);
    //console.log(problema);

    this.http.post('http://localhost:3000/problema/relatarProblema', problema).subscribe(response => {
      //console.log(problema);
    });

    /*this.http.get('http://localhost:8100/cadastrarEspecialidade' + this.name).subscribe(response => {
      console.log('GET Response:', response);
    });*/


    //console.log(this.descricaoEspecialidade);
  }
}
