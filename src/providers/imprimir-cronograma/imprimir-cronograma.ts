import { HttpClient } from '@angular/common/http';
import { Injectable, Component, ViewChild } from '@angular/core';
import { ImprimirCronogramaEstagiarios } from '../../models/model.imprimir-cronograma-estagiarios';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HomePage } from '../../pages/home/home';

@Injectable()
export class ImprimirCronogramaEstagiariosProvider {
  
  solicitante: any;
  salareserva: any;
  datareserva: any;
  
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

  retornarReservaSala(){    
    return this.http.get('http://localhost:3000/reservaSala/listar').toPromise();
  }

  listarDatasReservadas(sala){
    return new Promise((resolve, reject) => {
    this.http.post('http://localhost:3000/reservaSala/listarDataReserva', sala).subscribe(response => {
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
  }
}
