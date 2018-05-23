import { HttpClient } from '@angular/common/http';
import { Injectable, Component, ViewChild } from '@angular/core';
import { Especialidade } from '../../models/model.cadastrar-especialidade';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HomePage } from '../../pages/home/home';

@Injectable()
export class CadastrarEspecialidadeProvider {

  descricaoespecialidade: any;

  push(arg0: any): any {
    throw new Error("Method not implemented.");
  }

  @ViewChild(Nav) nav: Nav;
  constructor(
    private http: HttpClient, 
    public alertCtrl: AlertController
  ) {}

  create(especialidade: Especialidade) {
    var rota = "cadastrar";
    if (especialidade.codigoEspecialidade != ""){
      rota = "editar";
    }
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/especialidade/' + rota, especialidade).subscribe(response => {
        resolve(response);
      });
    });
  }

  retornarEspecialidade(){
    return this.http.get('https://backfisio.herokuapp.com/especialidade/listar').toPromise();
  }

  excluirEspecialidade(codigoEspecialidade){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/especialidade/excluir', codigoEspecialidade).subscribe(response => {
        resolve(response);
      });
    });
  }
}
