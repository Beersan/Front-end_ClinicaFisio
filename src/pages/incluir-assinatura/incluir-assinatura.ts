import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the IncluirAssinaturaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-incluir-assinatura',
  templateUrl: 'incluir-assinatura.html',
})
export class IncluirAssinaturaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IncluirAssinaturaPage');
  }

  cancelar(){
    this.navCtrl.pop();
  }
  
}
