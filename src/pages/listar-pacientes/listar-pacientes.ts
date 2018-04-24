import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PreCadastroProvider } from '../../providers/pre-cadastro/pre-cadastro';
import { PreCadastroPage } from '../pre-cadastro/pre-cadastro';
import { ActionSheetController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { FinalizarPreCadastroPage } from '../finalizar-pre-cadastro/finalizar-pre-cadastro';

@IonicPage()
@Component({
  selector: 'page-listar-pacientes',
  templateUrl: 'listar-pacientes.html',
})
export class ListarPacientesPage {

  pacientes: any;
  listarPacientesF: any;
  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private provider: PreCadastroProvider,
      public actionSheetCtrl: ActionSheetController,
      private alertCtrl: AlertController,
      private toastCtrl: ToastController
  ) {}
  
  ionViewWillEnter(){
    this.listarPacientes();
  }

  visualizar(paciente) {
    var valor = JSON.parse(JSON.stringify(paciente));
    var mensagem = "CPF: " + valor.cpfpaciente + "\n"
    + "RG: " + valor.rgpaciente + "\n"
    + "Endereço: " + valor.enderecopaciente + ", " + valor.numeropaciente +  "\n"
    + "Bairro: " + valor.bairropaciente + "\n"
    + "Cidade: " + valor.cidadepaciente + "\n"
    + "Telefone 2: " + valor.telefone2 + "\n";

    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000,
      position: 'botton'
    }); 
    toast.present();
  }

  filtrarItens(searchbar) {
    this.pacientes = this.listarPacientesF;
    var q = searchbar.srcElement.value;
    if (!q) {
      return;
    }
    this.pacientes = this.pacientes.filter((v) => {
      if(v.nomepaciente && q) {
        if (v.nomepaciente.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
          return false;
      }
    });
  }

  incluir(){
    this.navCtrl.push(PreCadastroPage, {
      rootNavCtrl: this.navCtrl
    });
  }

  listarPacientes(){
    this.provider.retornarPacientes().then(
      data => {
        this.pacientes = data;
        this.listarPacientesF = data;
      }
    )
    .catch(error => alert(error));
  }

  excluir(idPaciente){
    let alert = this.alertCtrl.create({
      title: 'Reprovar!',
      message: 'Deseja reprovar este paciente?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Reprovar',
          handler: () => {
            this.provider.excluirPaciente({
              idPaciente: idPaciente
            }).then((result) => {
              this.listarPacientes();
              this.showAlert();
            });
          }
        }
      ]
    });
    alert.present();
  }

  finalizar(paciente){
    let alert = this.alertCtrl.create({
      title: 'Aprovar paciente!',
      message: 'Deseja revisar as informações e aprovar este paciente?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Sim',
          handler: () => {
            this.navCtrl.push(FinalizarPreCadastroPage, {
              rootNavCtrl: this.navCtrl,
              paciente: paciente
            });
          }
        }
      ]
    });
    alert.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Paciente reprovado.',
      buttons: ['Ok']
    });
    alert.present();
  }

  visualizarEnc(anexo) {    
    window.open(anexo,'blank');
  }
  
  classeIcone(classe: any){
    var valor = "ocultar";
    if (classe = "mostrar"){
      valor = "mostrar";
    }
    return valor
  }
}
