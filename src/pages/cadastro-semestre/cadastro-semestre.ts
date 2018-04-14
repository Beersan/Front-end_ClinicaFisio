import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SemestreProvider } from '../../providers/semestre/semestre';
import { NgForm, FormsModule, Validators, FormBuilder} from '@angular/forms';

/**
 * Generated class for the CadastroSemestrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-semestre',
  templateUrl: 'cadastro-semestre.html',
})
export class CadastroSemestrePage {

  nomeSemestre: string;
  dataInicioSemestre: Date;
  dataFimSemestre: Date;
  idSemestre = "";

  constructor(public navCtrl: NavController, 
              private provider: SemestreProvider,
              private alertCtrl: AlertController,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroSemestrePage');
  }

  cadastrarSemestre(){
    this.provider.create({
        nomeSemestre: this.nomeSemestre, 
        dataInicioSemestre: this.dataInicioSemestre,
        dataFimSemestre: this.dataFimSemestre,
        idSemestre: this.idSemestre
    }).then((result) => {
      console.log(result);
      this.showAlert();    
    });        
  }
  
  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Estagiário gravado.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }

  cancelar(){
    this.navCtrl.pop();
  }

}
