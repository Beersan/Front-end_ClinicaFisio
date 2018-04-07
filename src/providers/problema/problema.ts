import { HttpClient } from '@angular/common/http';
import { Injectable, Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http'


import { HomePage } from '../../pages/home/home';
import { RelatarProblema } from '../../models/model.relatar-problemas';

@Injectable()
export class RelatarProblemaProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ProblemaProvider Provider');
  }

  create(problema: RelatarProblema) {
    const data = JSON.stringify(problema);
    console.log(problema);

    this.http.post('http://localhost:3000/problema/relatarProblema', problema).subscribe(response => {
      console.log(problema);
    });
  }
}
