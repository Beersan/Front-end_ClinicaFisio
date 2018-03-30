import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarGrupo } from '../../models/model.cadastrar-grupo';
import { GrupoProvider } from './../../providers/grupo/grupo';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormsModule } from '@angular/forms';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CadastrarGrupoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-grupo',
  templateUrl: 'cadastrar-grupo.html',
})
export class CadastrarGrupoPage {

  grupo: CadastrarGrupo;
  descricao: string;
  idGrupo = "";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private http: HttpClient,
              public alertCtrl: AlertController,
              private provider: GrupoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarGrupoPage');
  }

  cadastrarGrupo(){
    //campos
    this.provider.create({
        descricao: this.descricao,
        idGrupo: this.idGrupo
    });
    console.log(this.descricao);
    this.showAlert();
  }

  /*incluir(){
    this.navCtrl.push(CadastrarGrupoPage, {
      rootNavCtrl: this.navCtrl
    });
  }*/


  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Grupo cadastrado.',
      buttons: ['Ok']
    });
    alert.present();
    //this.navCtrl.pop();
  }

}
