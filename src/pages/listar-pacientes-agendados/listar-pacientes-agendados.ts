import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendarAtendimentoPage } from '../agendar-atendimento/agendar-atendimento';

/**
 * Generated class for the ListarPacientesAgendadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-pacientes-agendados',
  templateUrl: 'listar-pacientes-agendados.html',
})
export class ListarPacientesAgendadosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarPacientesAgendadosPage');
  }

  incluir(){
    this.navCtrl.push(AgendarAtendimentoPage, {
      rootNavCtrl: this.navCtrl
    });
  }

}
