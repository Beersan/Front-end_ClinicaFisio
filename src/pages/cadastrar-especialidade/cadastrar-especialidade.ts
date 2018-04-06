import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarEspecialidadeProvider} from './../../providers/especialidade/especialidade';
import { NgForm, FormsModule,Validators, FormBuilder } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { Especialidade } from '../../models/model.cadastrar-especialidade';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-cadastrar-especialidade',
  templateUrl: 'cadastrar-especialidade.html',
})
export class CadastrarEspecialidadePage {

  cadastroEspecialidade: any = {};
  especialidades: any[];
  descricaoEspecialidade: string;
  especialidade: Especialidade;
  codigoEspecialidade: "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private http: HttpClient,
    public formBuilder: FormBuilder,
    public provider: CadastrarEspecialidadeProvider
  ) {
    if (this.navParams.data.especialidade) { 
      //teste  
      console.log("funica demonho");   
      this.especialidades = this.navParams.data.especialidade;
      console.log(this.especialidades);
      var text = JSON.stringify(this.especialidades);
      var obj = JSON.parse(text);
      this.descricaoEspecialidade = obj.descricaoespecialidade;
      this.codigoEspecialidade = obj.codigoespecialidade;
    }
    this.cadastroEspecialidade = formBuilder.group ({
      descricaoEspecialidade:['', Validators.required]
    })
    console.log("funica demonho 3 "); 
    console.log(this.codigoEspecialidade);
  }
  
  cadastrarEspecialidade(){
    //campos deu pau no cod para cadastrar undefined em vez de null
    console.log("funica demonho 2");
    console.log(this.descricaoEspecialidade);
    console.log(this.codigoEspecialidade);

    this.provider.create({
        descricaoEspecialidade: this.descricaoEspecialidade,
        codigoEspecialidade: this.codigoEspecialidade
    }).then((result) => {
      console.log(result);
      this.showAlert();    
    });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Especialidade cadastrada'
    });
    alert.present();
    this.navCtrl.pop();
  }

  cancelar(){
    this.navCtrl.pop();
  }
}
