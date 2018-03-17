import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarEstagiarioProvider} from './../../providers/cadastrar-estagiario/cadastrar-estagiario';

/**
 * Generated class for the CadastrarEstagiarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-estagiario',
  templateUrl: 'cadastrar-estagiario.html',
})
export class CadastrarEstagiarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, provider: CadastrarEstagiarioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarEstagiarioPage');
  }

}
