import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FilaEsperaProvider } from '../../providers/fila-espera/fila-espera';
import { NgForm, FormsModule,Validators, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-vincular-paciente-estagiario',
  templateUrl: 'vincular-paciente-estagiario.html',
})
export class VincularPacienteEstagiarioPage {
  estagiarios: any;
  estagiario: any;
  paciente: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private provider: FilaEsperaProvider    
  ) {
    this.listarEstagiarios();    
    if (this.navParams.data.idPaciente) {      
      this.paciente = this.navParams.data.idPaciente;
    }
  }

  gravar(){
    console.log(this.estagiario)
    // this.provider.vincularPacienteEstagiario({
    //   idpaciente: this.paciente,    
    //   idestagiario: this.estagiario
    // }).then((result) => {
    //   this.showAlert();    
    // }); 
  }

  listarEstagiarios(){
    this.provider.retornarEstagiariosFila().then(
      data => {
        console.log(data);
        this.estagiarios = data;
      }
    )
    .catch(error => alert(error));
  }
 
  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Paciente vinculado à estagiário.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }

  cancelar(){
    this.navCtrl.pop();
  }
}
