import { HttpClient } from '@angular/common/http';
import { Injectable, Component, ViewChild } from '@angular/core';
import { Estagiario } from '../../models/model.cadastrar-estagiario';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';


import { HomePage } from '../../pages/home/home';


/*
  Generated class for the CadastrarEstagiarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CadastrarEstagiarioProvider {

  @ViewChild(Nav) nav: Nav;
  constructor(private http: HttpClient, public alertCtrl: AlertController) {
    
  }

  create(estagiario: Estagiario) {
    
    return this.http.post('http://localhost:3000/estagiario/cadastrar', estagiario).subscribe(response => {
    });

  }

  retornarEstagiario(){
    return this.http.get('http://localhost:3000/estagiario/listar').subscribe(response => {
      console.log('GET Response:', response);
    });

  }
}
