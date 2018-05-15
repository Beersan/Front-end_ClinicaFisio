import { HttpClient } from '@angular/common/http';
import { Injectable, Component, ViewChild } from '@angular/core';
import { ImprimirCronograma } from '../../models/model.imprimir-cronograma';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HomePage } from '../../pages/home/home';

@Injectable()
export class ImprimirCronogramaProvider {
  
  /*semestres: any;
  grupos: any;
  horarios: any;
  estagiarios: any;
  especialidades: any;
  professores: any;
  //etapas: any;*/
  
  push(arg0: any): any {
    throw new Error("Method not implemented.");
  }

  @ViewChild(Nav) nav: Nav;
  constructor(
    private http: HttpClient, 
    public alertCtrl: AlertController
  ) {}

  /*create(reserva: ImprimirCronogramaEstagiarios) {
    var rota = "cadastrar";
    if (reserva.idReserva != ""){
      rota = "editar";
    }
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/reservaSala/' + rota, reserva).subscribe(response => {
        resolve(response);
      });
    });
  }*/

  retornarCronograma(){    
    return this.http.get('http://localhost:3000/cronograma/listar').toPromise();
  }

  /*listarCronogramas(sala){
    return new Promise((resolve, reject) => {
    this.http.post('http://localhost:3000/cronograma/listarDataReserva', sala).subscribe(response => {
        resolve(response);
      });
    });
  }

  excluirReservaSala(idReserva){
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/reservaSala/excluir', idReserva).subscribe(response => {
        resolve(response);
      });
    });
  }*/
}
