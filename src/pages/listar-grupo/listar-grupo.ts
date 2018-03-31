import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarGrupoPage } from '../cadastrar-grupo/cadastrar-grupo';

/**
 * Generated class for the ListarGrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-grupo',
  templateUrl: 'listar-grupo.html',
})
export class ListarGrupoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarGrupoPage');
  }

  incluir(){
    this.navCtrl.push(CadastrarGrupoPage, {
      rootNavCtrl: this.navCtrl
    });
  }
}
