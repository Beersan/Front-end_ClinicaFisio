import { HttpClient } from '@angular/common/http';
import { Injectable, Component, ViewChild } from '@angular/core';
import { Estagiario } from '../../models/model.cadastrar-estagiario';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HomePage } from '../../pages/home/home';

@Injectable()
export class CadastrarEstagiarioProvider {
  
  emailestagiario: any;
  telefoneestagiario: any;
  matriculaestagiario: any;
  nomeestagiario: any;

  push(arg0: any): any {
    throw new Error("Method not implemented.");
  }

  @ViewChild(Nav) nav: Nav;
  constructor(
    private http: HttpClient, 
    public alertCtrl: AlertController
  ) {}

  create(estagiario: Estagiario) {
    var rota = "cadastrar";
    if (estagiario.idEstagiario != ""){
      rota = "editar";
    }
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/estagiario/' + rota, estagiario).subscribe(response => {
        resolve(response);
      });
    });
  }

  retornarEstagiario(){    
    return this.http.get('http://localhost:3000/estagiario/listar').toPromise();
  }

  excluirEstagiario(idEstagiario){
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/estagiario/excluir', idEstagiario).subscribe(response => {
        resolve(response);
      });
    });
  }
}
