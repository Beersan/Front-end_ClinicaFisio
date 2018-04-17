import { HttpClient } from '@angular/common/http';
import { Injectable, Component, ViewChild } from '@angular/core';
import { ReservarSala } from '../../models/model.reservar-sala';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { HomePage } from '../../pages/home/home';

@Injectable()
export class ReservaSalaProvider {
  
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

  create(reserva: ReservarSala) {
    var rota = "cadastrar";
    if (reserva.idReserva != ""){
      rota = "editar";
    }
    console.log(reserva);
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/reservarSala/' + rota, reserva).subscribe(response => {
        resolve(response);
      });
    });
  }

  retornarReservaSala(){    
    return this.http.get('http://localhost:3000/reservarSala/listar').toPromise();
  }

  excluirReservaSala(idReserva){
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/reservarSala/excluir', idReserva).subscribe(response => {
        resolve(response);
      });
    });
  }
}
