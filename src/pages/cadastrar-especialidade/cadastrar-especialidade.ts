import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarEspecialidadeProvider} from './../../providers/especialidade/especialidade';
import { NgForm, FormsModule } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { Especialidade } from '../../models/model.cadastrar-especialidade';

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

  //alertCtrl: any;
  especialidade: Especialidade;
  descricaoEspecialidade: string;

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
        descricaoEspecialidade: this.descricaoEspecialidade
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
}
