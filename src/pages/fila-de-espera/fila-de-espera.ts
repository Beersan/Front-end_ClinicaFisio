import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { PreCadastroProvider } from '../../providers/pre-cadastro/pre-cadastro';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fila-de-espera',
  templateUrl: 'fila-de-espera.html',
})

export class FilaDeEsperaPage {
  pacientes: any;
  listarPacientesF: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provider: PreCadastroProvider,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ){}

  ionViewWillEnter(){
    this.listarPacientes();
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

  listarPacientes(){
    this.provider.retornarPacientesFila().then(
      data => {
        console.log(data);
        this.pacientes = data;
        this.listarPacientesF = data;
      }
    )
    .catch(error => alert(error));
  }
}
