import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarEspecialidadeProvider} from './../../providers/cadastrar-especialidade/cadastrar-especialidade';
import { NgForm, FormsModule } from '@angular/forms';
import { Especialidade } from '../../models/model.especialidade';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provider: CadastrarEspecialidadeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarEspecialidadePage');
  }

  CadastrarEspecialidade(){
    //campos
    this.provider.create({
        descricaoEspecialidade: this.descricaoEspecialidade
    });
    //console.log(this.descricaoEspecialidade);
  }
}
