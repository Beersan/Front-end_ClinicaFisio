import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarGrupo } from '../../models/model.cadastrar-grupo';
import { GrupoProvider } from './../../providers/grupo/grupo';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormsModule, FormBuilder, Validators} from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';

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
              private formBuilder:FormBuilder
            ) {
              if (this.navParams.data.grupo) {      
                this.grupo = this.navParams.data.grupo;
                console.log(this.grupo);
                var text = JSON.stringify(this.grupo);
                var obj = JSON.parse(text);
                this.descricao = obj.descricaogrupo;
                this.idGrupo = obj.idgrupo;
              }
              this.cadastroGrupo = formBuilder.group ({
                descricao:['', Validators.required]
              })
            } 

  cadastrarGrupo(){
    //campos
    this.provider.create({
        descricao: this.descricao,
        idGrupo: this.idGrupo
    }).then((result) =>{
      console.log(result);
      this.showAlert();
    });
  }

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
    this.navCtrl.pop();
  }
}
