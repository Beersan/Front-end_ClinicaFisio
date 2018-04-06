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
    this.listarPaciantes();
  }

  incluir(){
    this.navCtrl.push(PreCadastroPage, {
      rootNavCtrl: this.navCtrl
    });
  }

  listarPaciantes(){
    this.provider.retornarPacientes().then(
      data => {
        this.pacientes = data;
        console.log(data);
      }
    )
    .catch(error => alert(error));
  }

  visualizar(array) {
    // console.log(array);    
    // let actionSheet = this.actionSheetCtrl.create({
    //   title: 'Visualizar',
    //   buttons: [
    //     {
    //       text: 'Destructive'
    //     },{
    //       text: 'Archive'
    //     },{
    //       text: 'Fechar',
    //       role: 'cancel'
    //     }
    //   ]
    // });
    // actionSheet.present();
  }

  excluir(idPaciente){
    let alert = this.alertCtrl.create({
      title: 'Excluir!',
      message: 'Deseja excluir esse paciente?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.provider.excluirPaciente({
              idPaciente: idPaciente
            }).then((result) => {
              this.listarPaciantes();
              this.showAlert();
            });
          }
        }
      ]
    });
    alert.present();
  }

  editar(){

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
