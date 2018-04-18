import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RelatarProblemaProvider} from './../../providers/problema/problema';
import { NgForm, FormsModule, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { RelatarProblema } from './../../models/model.relatar-problemas';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-relatar-problema',
  templateUrl: 'relatar-problema.html',
})
export class RelatarProblemaPage {
  relatoProblema = {};
  problemas: any[];
  problema: RelatarProblema;
  assuntoProblema: string;
  descricaoProblema: string;
  idProblema = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private http: HttpClient,
    public formBuilder: FormBuilder,
    public provider: RelatarProblemaProvider
  ) {
    if (this.navParams.data.problema) {      
      this.problemas = this.navParams.data.problema;
      console.log(this.problemas);
      var text = JSON.stringify(this.problemas);
      var obj = JSON.parse(text);
      this.assuntoProblema = obj.assuntoproblema;
      this.descricaoProblema = obj.descricaoproblema;
      this.idProblema = obj.idproblema;
    }
    this.relatoProblema = formBuilder.group ({
      assunto:['', Validators.required],
      descricao:['', Validators.required]
    })  
  }

  relatarProblema(){
    this.provider.create({
      assuntoProblema: this.assuntoProblema,
      descricaoProblema: this.descricaoProblema,
      idProblema: this.idProblema
    });
    console.log(this.descricaoProblema)
    this.showAlert();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Reclamação enviada.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }

  cancelar(){
    this.navCtrl.pop();
  }
}
