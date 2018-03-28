import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarEstagiarioProvider} from './../../providers/estagiario/estagiario';
import { NgForm, FormsModule } from '@angular/forms';
import { Estagiario } from './../../models/model.cadastrar-estagiario';
import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the CadastrarEstagiarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-estagiario',
  templateUrl: 'cadastrar-estagiario.html',
})
export class CadastrarEstagiarioPage {

  estagiario: Estagiario;
  nomeEstagiario: string;
  numeroMatricula: string;
  telefone: string;
  email: string;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private provider: CadastrarEstagiarioProvider,
              private http: HttpClient,
              public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarEstagiarioPage');
  }

  cadastrarEstagiario(){
    //campos
    this.provider.create({
        nomeEstagiario: this.nomeEstagiario, 
        numeroMatricula: this.numeroMatricula,
        telefone: this.telefone,
        email: this.email
    });    
    this.showAlert();
  }

  
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Estagiario cadastrado'      
    });
    alert.present();
    this.navCtrl.pop();
  }
}
