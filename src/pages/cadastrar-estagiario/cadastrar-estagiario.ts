import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarEstagiarioProvider} from './../../providers/estagiario/estagiario';
import { NgForm, FormsModule } from '@angular/forms';
import { Estagiario } from './../../models/model.cadastrar-estagiario';
import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ListarEstagiarioPage } from '../listar-estagiario/listar-estagiario';

@IonicPage()
@Component({
  selector: 'page-cadastrar-estagiario',
  templateUrl: 'cadastrar-estagiario.html',
})

export class CadastrarEstagiarioPage {
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
    public alertCtrl: AlertController
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
      

      //#Editar Estagiario 
      // Gabriel - 28/03 23h - Thais 29/03 13h 
      // Não alterar página e dependências
      // ps: NAO CONSIGO ACESSAR ESSE LIXO DE JSON NO TS, PQP. att 
      //res: EU CONSIGO att Thaís ;) 
    }
    
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
  
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Estagiário cadastrado.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }
}
