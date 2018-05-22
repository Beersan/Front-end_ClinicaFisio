import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm, FormsModule, Validators, FormBuilder } from '@angular/forms';
import { EvolucaoDiariaPage } from '../evolucao-diaria/evolucao-diaria';
import { IncluirAssinaturaPage } from '../incluir-assinatura/incluir-assinatura';

/**
 * Generated class for the GerenciamentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gerenciamento',
  templateUrl: 'gerenciamento.html',
})
export class GerenciamentoPage {
  gerenciamentoAtendimento: any;
  presenca: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) 
    {
    // this.gerenciamentoAtendimento();  ({
    //     paciente:['', Validators.required],
    // })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GerenciamentoPage');
  }

  cancelar(){
    this.navCtrl.pop();
  }

  inserirAssinatura(){
    this.navCtrl.push(IncluirAssinaturaPage, {
      rootNavCtrl: this.navCtrl
    });
  }

  evolucaoDiaria(){
    this.navCtrl.push(EvolucaoDiariaPage, {
      rootNavCtrl: this.navCtrl
    });
  }
}
