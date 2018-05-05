import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendarAtendimentoPage } from '../agendar-atendimento/agendar-atendimento';
import { AgendaProvider } from '../../providers/agenda/agenda';

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

  listaAgenda: any;

  constructor(public navCtrl: NavController, 
              private provider: AgendaProvider,
              public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.listarAgenda();
  }

  incluir(){
    this.navCtrl.push(AgendarAtendimentoPage, {
      rootNavCtrl: this.navCtrl
    });
  }

  listarAgenda(){
    this.provider.retornarAgenda().then(
      data => {
        this.listaAgenda = data;
        console.log(data);
      }
    )
    .catch(error => alert(error));
  }

}
