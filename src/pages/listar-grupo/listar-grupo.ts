import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GrupoProvider } from '../../providers/grupo/grupo';
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

  grupos: any;

  constructor(public navCtrl: NavController, 
              private provider:GrupoProvider, 
              public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.listarGrupo();
  }

  incluir(){
    this.navCtrl.push(CadastrarGrupoPage, {
      rootNavCtrl: this.navCtrl
    });
  }

  listarGrupo(){
    this.provider.retornarGrupo().then(
      data => {
        this.grupos = data;
        console.log(this.grupos);
      }
    )
    .catch(error => alert(error));
  }
}
