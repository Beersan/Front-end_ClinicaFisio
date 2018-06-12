import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NgForm, FormsModule, Validators, FormBuilder } from '@angular/forms';
import { EvolucaoDiariaPage } from '../evolucao-diaria/evolucao-diaria';
import { IncluirAssinaturaPage } from '../incluir-assinatura/incluir-assinatura';
import { AgendaProvider } from '../../providers/agenda/agenda';

@IonicPage()
@Component({
  selector: 'page-gerenciamento',
  templateUrl: 'gerenciamento.html',
})
export class GerenciamentoPage {
  gerenciamentoAtendimento: any;
  presenca: any;
  dadosAgenda: any;
  listaSessoes: any;
  status: any;
  idagenda: any;
  constructor(
    public navCtrl: NavController, 
    private alertCtrl: AlertController,
    private provider: AgendaProvider,
    public navParams: NavParams
  ){
    if (this.navParams.data.agenda) {      
      this.dadosAgenda = JSON.parse(JSON.stringify(this.navParams.data.agenda));
      this.status = this.dadosAgenda.idstatus;
      this.idagenda = this.dadosAgenda.idagenda;
    }
  }

  ionViewWillEnter(){
    if (this.dadosAgenda.idagenda != '' && this.dadosAgenda.idagenda != null){
      this.retornarSessoes(this.dadosAgenda.idagenda);
    }
  }

  retornarSessoes(idagenda){
    this.provider.buscarSessoes({idagenda: idagenda}).then(
      data => {
        this.listaSessoes = data;
      }
    )
    .catch(error => alert(error));
  }

  gravar(){    
    this.provider.gravarStatus({
      status: this.status,
      idagenda: this.idagenda
    }).then((result) => {
      this.showAlert();    
    });  
  }

  cancelar(){
    this.navCtrl.pop();
  }

  cancelarAtendimento(){
    let alert = this.alertCtrl.create({
      title: 'Encerrar!',
      message: 'Deseja encerrar esse atendimento? O atendimento não poderá mais ser gerenciado.',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Encerrar',
          handler: () => {
            this.provider.gravarStatus({
              status: "4",
              idagenda: this.idagenda
            }).then((result) => {
              this.showAlertEncerrado();
            });
          }
        }
      ]
    });
    alert.present();
  }

  inserirAssinatura(sessao){
    this.navCtrl.push(IncluirAssinaturaPage, {
      rootNavCtrl: this.navCtrl,
      sessao: sessao
    });
  }

  evolucaoDiaria(sessao){
    this.navCtrl.push(EvolucaoDiariaPage, {
      rootNavCtrl: this.navCtrl,
      sessao: sessao
    });
  }

  showAlertEncerrado(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Atendimento encerrado.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Atendimento alterado.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }

  visualizar(assinatura) {
    console.log(assinatura);
    window.open(assinatura,'blank');
  }
}