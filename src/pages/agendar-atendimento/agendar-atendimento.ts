import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm, FormsModule, Validators, FormBuilder } from '@angular/forms';

/**
 * Generated class for the AgendarAtendimentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agendar-atendimento',
  templateUrl: 'agendar-atendimento.html',
})
export class AgendarAtendimentoPage {

  validarAgendarAtendimento: any = {};
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private formBuilder: FormBuilder) 
  {
    this.validarAgendarAtendimento = formBuilder.group ({
      paciente:['', Validators.required],
      diaDaSemana:['', Validators.required],      
      horario:['', Validators.required],
      numeroSessoes:['', Validators.required],
      dataInicioAtendimento:['', Validators.required],
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendarAtendimentoPage');
  }

  cancelar(){
    this.navCtrl.pop();
  }

 

}
