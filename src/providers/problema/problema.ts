import { HttpClient } from '@angular/common/http';
import { Injectable, Component, ViewChild } from '@angular/core';
import { RelatarProblema } from '../../models/model.relatar-problemas';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HomePage } from '../../pages/home/home';

@Injectable()
export class RelatarProblemaProvider {
  /*
  assuntoproblema: any;
  descricaoproblema: any;*/

  push(arg0: any): any {
    throw new Error("Method not implemented.");
  }

  @ViewChild(Nav) nav: Nav;
  constructor(
    private http: HttpClient, 
    public alertCtrl: AlertController
  ) {}

  create(problema: RelatarProblema) {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/problema/relatarProblema', problema).subscribe(response => {
        resolve(response);
      });
    });
  }
}
