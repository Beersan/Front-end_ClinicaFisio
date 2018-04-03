import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarGrupoEstagiariosPage } from '../cadastrar-grupo-estagiarios/cadastrar-grupo-estagiarios';

/**
 * Generated class for the ListarGrupoEstagiariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-grupo-estagiarios',
  templateUrl: 'listar-grupo-estagiarios.html',
})
export class ListarGrupoEstagiariosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarGrupoEstagiariosPage');
  }
  
  incluir(){
    this.navCtrl.push(CadastrarGrupoEstagiariosPage, {
      rootNavCtrl: this.navCtrl
    });
  }  

}
