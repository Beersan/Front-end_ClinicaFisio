import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GrupoEstagiarioProvider } from '../../providers/grupo-estagiario/grupo-estagiario';

/**
 * Generated class for the CadastrarGrupoEstagiariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-grupo-estagiarios',
  templateUrl: 'cadastrar-grupo-estagiarios.html',
})
export class CadastrarGrupoEstagiariosPage {

  grupos: any;
  estagiarios: any;

  constructor(public navCtrl: NavController, 
              private provider: GrupoEstagiarioProvider,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarGrupoEstagiariosPage');
    this.listarGrupo();
    this.listarEstagiario();
  }

  cadastrarGrupoEstagiario(){

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

  listarEstagiario(){
    this.provider.retornarEstagiario().then(
      data => {
        this.estagiarios = data;
        console.log(data);
      }
    )
    .catch(error => alert(error));
  }
}
