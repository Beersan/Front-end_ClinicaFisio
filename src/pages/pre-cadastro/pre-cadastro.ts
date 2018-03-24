import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { PreCadastroProvider} from './../../providers/pre-cadastro/pre-cadastro';
import { NgForm, FormsModule } from '@angular/forms';
import { PreCadastro } from '../../models/model.pre-cadastro';

/**
 * Generated class for the PreCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pre-cadastro',
  templateUrl: 'pre-cadastro.html',
})
export class PreCadastroPage {
  nomePaciente: String;
  registroGeral: String;
  CPF: String;
  dataNascimento: Date;
  rendaFamiliar: DoubleRange;
  endereco: String;
  numero: String;
  bairro: String;
  cidade: String;
  telefoneUm: String;
  telefoneDois: String;
  encaminhamento: String; //faio
  especialidade: String;
  // preCadastro: PreCadastro;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    //**private provider: PreCadastroProvider*/
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreCadastroPage');
  }

  incluirPreCadastro(){
  //   this.provider.create({
  //     nomePaciente: this.nomePaciente,
  //     registroGeral: this.registroGeral,
  //     CPF:this.CPF,
  //     dataNascimento: this.dataNascimento,
  //     rendaFamiliar: this.rendaFamiliar,
  //     endereco: this.endereco,
  //     numero: this.numero,
  //     bairro: this.bairro,
  //     cidade: this.cidade,
  //     telefoneUm: this.telefoneUm,
  //     telefoneDois: this.telefoneDois
  //     //encaminhamento: File,
  //     //especialidade: String
  //   });
   }
}
