import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarEstagiarioPage } from '../cadastrar-estagiario/cadastrar-estagiario';
import { CadastrarEstagiarioProvider } from '../../providers/estagiario/estagiario';
import { Estagiario } from './../../models/model.cadastrar-estagiario';



/**
 * Generated class for the ListarEstagiarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-listar-estagiario',
  templateUrl: 'listar-estagiario.html',
})
export class ListarEstagiarioPage {

  estagiarios: any;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private provider: CadastrarEstagiarioProvider) {
  }

  ionViewDidLoad() {
    this.listarEstagiario();
  }
  
  incluir(){
    this.navCtrl.push(CadastrarEstagiarioPage, {
      rootNavCtrl: this.navCtrl
    });
  }
  
  listarEstagiario(){
    console.log('Teste listarEstagiario');
    this.provider.retornarEstagiario().then(
      data => {
        this.estagiarios = data;
        console.log(data);
      }
    )
    .catch(error => alert(error));

  }
}
