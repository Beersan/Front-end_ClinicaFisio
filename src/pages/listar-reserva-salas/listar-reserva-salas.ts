import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReservarSalaPage } from '../reservar-sala/reservar-sala';
import { ReservaSalaProvider } from '../../providers/reserva-sala/reserva-sala';
import { ReservarSala } from './../../models/model.reservar-sala';
import { updateDate } from 'ionic-angular/util/datetime-util';
import { AlertController } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-listar-reserva-salas',
  templateUrl: 'listar-reserva-salas.html',
})

export class ListarReservasPage {

  reservas: any;
  reservasSemFiltro: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: ReservaSalaProvider,
    private alertCtrl: AlertController
  ) {}

  ionViewWillEnter(){
    this.listarReservasSala();
  }


  filtrarItens(searchbar) {
    // Reset items back to all of the items
    this.reservas = this.reservasSemFiltro;
  
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;
  
  
    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
  
    this.reservas = this.reservas.filter((v) => {
      if(v.solicitante && q) {
        if (v.solicitante.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
          return false;
      }
    });
  
    console.log(q, this.reservas.length);
  
  }

  incluir(){
    this.navCtrl.push(ReservarSalaPage, {
      rootNavCtrl: this.navCtrl
    });
  }

  editar(reserva: ReservarSala){
    this.navCtrl.push(ReservarSalaPage, {
      rootNavCtrl: this.navCtrl,
      reserva: reserva
    });
  }

  excluir(idReserva){
    let alert = this.alertCtrl.create({
      title: 'Excluir!',
      message: 'Deseja excluir esta reserva?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.provider.excluirReservaSala({
              idReserva: idReserva
            }).then((result) => {
              this.listarReservasSala();
              this.showAlert();
            });
          }
        }
      ]
    });
    alert.present();
  }

  listarReservasSala(){
    this.provider.retornarReservaSala().then(
      data => {
        this.reservas = data;
        this.reservasSemFiltro = this.reservas;
        console.log(data);
      }
    )
    .catch(error => alert(error));
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Reserva excluída.',
      buttons: ['Ok']
    });
    alert.present();
  }


}
