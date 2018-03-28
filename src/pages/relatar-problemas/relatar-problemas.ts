import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RelatarProblemasProvider} from './../../providers/problema/problema';
import { NgForm, FormsModule } from '@angular/forms';
import { RelatarProblemas } from './../../models/model.relatar-problemas';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RelatarProblemasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-relatar-problemas',
  templateUrl: 'relatar-problemas.html',
})
export class RelatarProblemasPage {

  problema: RelatarProblemas;
  descricaoProblema: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provider: RelatarProblemasProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelatarProblemasPage');
  }

  relatarProblema(){
    //campos
    this.provider.create({
        descricaoProblema: this.descricaoProblema
    });
    //console.log(this.descricaoEspecialidade);
    //this.showAlert();
  }

  /*showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Especialidade cadastrada'
    });
    alert.present();
    this.navCtrl.pop();
  }*/
}
