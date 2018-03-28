import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RelatarProblemaProvider} from './../../providers/problema/problema';
import { NgForm, FormsModule } from '@angular/forms';
import { RelatarProblema } from './../../models/model.relatar-problema';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RelatarProblemaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-relatar-problema',
  templateUrl: 'relatar-problema.html',
})
export class RelatarProblemaPage {

  problema: RelatarProblema;
  descricaoProblema: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provider: RelatarProblemaProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelatarProblemaPage');
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
