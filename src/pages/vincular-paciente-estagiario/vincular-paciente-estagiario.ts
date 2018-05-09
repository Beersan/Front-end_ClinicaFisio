import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilaEsperaProvider } from '../../providers/fila-espera/fila-espera';
import { NgForm, FormsModule,Validators, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-vincular-paciente-estagiario',
  templateUrl: 'vincular-paciente-estagiario.html',
})
export class VincularPacienteEstagiarioPage {
  estagiarios: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provider: FilaEsperaProvider    
  ) {
    this.listarEstagiarios();
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
 
  cancelar(){
    this.navCtrl.pop();
  }
}
