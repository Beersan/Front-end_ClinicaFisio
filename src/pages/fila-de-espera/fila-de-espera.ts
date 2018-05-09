import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { FilaEsperaProvider } from '../../providers/fila-espera/fila-espera';
import { IncluirExamesTermosPage } from '../incluir-exames-termos/incluir-exames-termos';
import { VincularPacienteEstagiarioPage } from '../vincular-paciente-estagiario/vincular-paciente-estagiario';

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
    private provider: FilaEsperaProvider,
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

  adicionarAnexos(idPaciente){
    this.navCtrl.push(IncluirExamesTermosPage, {
      rootNavCtrl: this.navCtrl,
      idPaciente: idPaciente
    });
  }

  vincularEstagiario(idPaciente){
    this.navCtrl.push(VincularPacienteEstagiarioPage, {
      rootNavCtrl: this.navCtrl,
      idPaciente: idPaciente
    });
  }
}
