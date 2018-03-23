import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  nome: String;
  documento: String;
  CPF: String;
  dataNascimento: Date;
  rendaFamiliar: DoubleRange;
  endereco: String;
  numero: String;
  bairro: String;
  cidade: String;
  telefoneUm: String;
  telefoneDois: String;
  encaminhamento: File;
  especialidade: String;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: PreCadastro
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreCadastroPage');
  }

  incluirPreCadastro(){
    // this.provider.create({
    //   nome: this.documento
    // });
  }
}
