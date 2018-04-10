import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { PreCadastroProvider } from '../../providers/pre-cadastro/pre-cadastro';
import { PreCadastroPage } from '../pre-cadastro/pre-cadastro';
import { ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-listar-pacientes',
  templateUrl: 'listar-pacientes.html',
})
export class ListarPacientesPage {
  pacientes: any;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private provider: PreCadastroProvider,
      public actionSheetCtrl: ActionSheetController,
      private alertCtrl: AlertController
  ) {}
  
  ionViewWillEnter(){
    this.listarPacientes();
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
        console.log(data);
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

  editar(){
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
            
          }
        }
      ]
    });
    alert.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Paciente excluído.',
      buttons: ['Ok']
    });
    alert.present();
  }
}
