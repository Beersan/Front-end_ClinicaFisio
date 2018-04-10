import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarEstagiarioProvider} from './../../providers/estagiario/estagiario';
import { NgForm, FormsModule, Validators, FormBuilder} from '@angular/forms';
import { Estagiario } from './../../models/model.cadastrar-estagiario';
import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
//import { ListarEstagiarioPage } from '../listar-estagiario/listar-estagiario';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-cadastrar-estagiario',
  templateUrl: 'cadastrar-estagiario.html',
})

export class CadastrarEstagiarioPage {
  cadastroEstagiario: any = {};
  estagiarios: any[];
  nomeEstagiario: string;
  numeroMatricula: string;
  telefone: string;
  email: string;
  estagiario: Estagiario;
  idEstagiario = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: CadastrarEstagiarioProvider,
    private http: HttpClient,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder
  ) {
    if (this.navParams.data.estagiario) {      
      this.estagiarios = this.navParams.data.estagiario;
      console.log(this.estagiarios);
      var text = JSON.stringify(this.estagiarios);
      var obj = JSON.parse(text);
      this.nomeEstagiario = obj.nomeestagiario;
      this.numeroMatricula = obj.matriculaestagiario;
      this.email = obj.emailestagiario;
      this.telefone = obj.telefoneestagiario;
      this.idEstagiario = obj.idestagiario;
    }
    this.cadastroEstagiario = formBuilder.group ({
      nome:['', Validators.required],
      matricula:['', Validators.required],
      telefone:['', Validators.compose([Validators.required])],
      email:['', Validators.compose([Validators.email, Validators.required])]
    })  
  }

  cadastrarEstagiario(){
    this.provider.create({
        nomeEstagiario: this.nomeEstagiario, 
        numeroMatricula: this.numeroMatricula,
        telefone: this.telefone,
        email: this.email,
        idEstagiario: this.idEstagiario
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
