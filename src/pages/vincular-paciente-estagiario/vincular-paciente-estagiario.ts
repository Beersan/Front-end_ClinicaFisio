import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VincularPacienteEstagiarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vincular-paciente-estagiario',
  templateUrl: 'vincular-paciente-estagiario.html',
})
export class VincularPacienteEstagiarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VincularPacienteEstagiarioPage');
  }

}
