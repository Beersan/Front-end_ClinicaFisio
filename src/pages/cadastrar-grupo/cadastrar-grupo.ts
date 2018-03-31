import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarGrupo } from '../../models/model.cadastrar-grupo';
import { GrupoProvider } from './../../providers/grupo/grupo';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormsModule, FormBuilder, Validators} from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

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

  cadastroGrupo: any= {};
  grupo: CadastrarGrupo;
  descricao: string;
  idGrupo = "";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private http: HttpClient,
              public alertCtrl: AlertController,
              private provider: GrupoProvider, 
              private formBuilder:FormBuilder) {
                this.cadastroGrupo = formBuilder.group ({
                  descricao:['', Validators.required]
                })
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
    this.navCtrl.pop();
  }

  cancelar(){
    this.navCtrl.push(HomePage, {
      rootNavCtrl: this.navCtrl
    });
  }
}
