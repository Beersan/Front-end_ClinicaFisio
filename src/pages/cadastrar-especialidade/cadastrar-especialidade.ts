import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarEspecialidadeProvider} from './../../providers/especialidade/especialidade';
import { NgForm, FormsModule,Validators, FormBuilder } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { Especialidade } from '../../models/model.cadastrar-especialidade';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';

/**
 * Generated class for the CadastrarEspecialidadePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-especialidade',
  templateUrl: 'cadastrar-especialidade.html',
})
export class CadastrarEspecialidadePage {

  especialidade: Especialidade;
  descricaoEspecialidade: string;
  //teste
  codigoEspecialidade: "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public provider: CadastrarEspecialidadeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarEspecialidadePage');
  }

  cadastrarEspecialidade(){
    //campos
    this.provider.create({
        descricaoEspecialidade: this.descricaoEspecialidade,
        //codigoEspecialidade: this.codigoEspecialidade
    });
    //console.log(this.descricaoEspecialidade);
    this.showAlert();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Especialidade cadastrada'
    });
    alert.present();
    this.navCtrl.pop();
  }

  cancelar(){
    this.navCtrl.push(HomePage, {
      rootNavCtrl: this.navCtrl
    });
  }
}
