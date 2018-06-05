import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AgendarAtendimentoPage } from '../agendar-atendimento/agendar-atendimento';
import { AgendaProvider } from '../../providers/agenda/agenda';
import { GerenciamentoPage } from '../gerenciamento/gerenciamento';

@IonicPage()
@Component({
  selector: 'page-listar-pacientes-agendados',
  templateUrl: 'listar-pacientes-agendados.html',
})
export class ListarPacientesAgendadosPage {

  listaAgenda: any;  
  listaAgendaF: any;  
  constructor(public navCtrl: NavController, 
    private alertCtrl: AlertController,
    private provider: AgendaProvider,
    public navParams: NavParams
  ) {
  }

  ionViewWillEnter(){
    this.listarAgenda();
  }

  incluir(){
    this.navCtrl.push(AgendarAtendimentoPage, {
      rootNavCtrl: this.navCtrl
    });
  }

  gerenciar(agenda){
    this.navCtrl.push(GerenciamentoPage, {
      rootNavCtrl: this.navCtrl,
      agenda: agenda
    });
  }

  listarAgenda(){
    this.provider.retornarAgenda().then(
      data => {
        this.listaAgenda = data;
        this.listaAgendaF = data;
      }
    )
    .catch(error => alert(error));
  }

  excluir(idagenda){
    let alert = this.alertCtrl.create({
      title: 'Excluir!',
      message: 'Deseja excluir esse atendimento?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.provider.excluirAtendimento({
              idagenda: idagenda
            }).then((result) => {
              this.listarAgenda();
              this.showAlert();
            });
          }
        }
      ]
    });
    alert.present();
  }

  enviarExames(idpaciente, estagiario){
    let alert = this.alertCtrl.create({
      title: 'Enviar exames!',
      message: 'Deseja enviar os exames deste paciente para o estagiário ' + estagiario + '?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Enviar',
          handler: () => {
            this.provider.enviarExames({
              idpaciente: idpaciente
            }).then((result) => {     
              console.log(result);         
              this.showAlertExames();
            });
          }
        }
      ]
    });
    alert.present();
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Atendimento excluído.',
      buttons: ['Ok']
    });
    alert.present();
  }

  showAlertExames(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Exames enviados.',
      buttons: ['Ok']
    });
    alert.present();
  }

  filtrarItens(searchbar) {
    this.listaAgenda = this.listaAgendaF;
    var q = searchbar.srcElement.value;
    if (!q) {
      return;
    }
    this.listaAgenda = this.listaAgenda.filter((v) => {
      if(v.nomepaciente && q) {
        if (v.nomepaciente.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
          return false;
      }
    });
  }
}
