import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarEstagiarioProvider} from './../../providers/cadastrar-estagiario/cadastrar-estagiario';
import { NgForm, FormsModule } from '@angular/forms';
import { Estagiario } from './../../models/model.cadastrar-estagiario';

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

  estagiario: Estagiario;
  nomeEstagiario: string;
  numeroMatricula: string;
  telefone: string;
  email: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private provider: CadastrarEstagiarioProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarEstagiarioPage');
  }

  cadastrarEstagiario(){
    //campos
    this.provider.create({
        nomeEstagiario: this.nomeEstagiario, 
        numeroMatricula: this.numeroMatricula,
        telefone: this.telefone,
        email: this.email

    });
    //console.log(this.nomeEstagiario + " " + this.numeroMatricula + " " + this.telefone + " " + this.email);
  }
}
