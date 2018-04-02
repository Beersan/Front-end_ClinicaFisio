import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm, FormsModule } from '@angular/forms';
import { PreCadastro } from '../../models/model.pre-cadastro';
import { PreCadastroProvider } from '../../providers/pre-cadastro/pre-cadastro';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the PreCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pre-cadastro',
  templateUrl: 'pre-cadastro.html',
})
export class PreCadastroPage {
  nomePaciente: String;
  registroGeral: String;
  CPF: String;
  dataNascimento: Date;
  rendaFamiliar: DoubleRange;
  endereco: String;
  numero: String;
  bairro: String;
  cidade: String;
  telefoneUm: String;
  telefoneDois: String;
  encaminhamento: String; //File depois - Aguardar front - Gabriel 31/03 13h
  especialidades: any;
  especialidade: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: PreCadastroProvider,
    private alertCtrl: AlertController
  ) {
    this.listarEspecialidade();
  }

  incluirPreCadastro(){    
    this.provider.gravar({
      nomePaciente: this.nomePaciente,
      registroGeral: this.registroGeral,
      CPF: this.CPF,
      dataNascimento: this.dataNascimento,
      rendaFamiliar: this.rendaFamiliar,
      endereco: this.endereco,
      numero: this.numero,
      bairro: this.bairro,
      cidade: this.cidade,
      telefoneUm: this.telefoneUm,
      telefoneDois: this.telefoneDois,
      encaminhamento: this.encaminhamento,
      especialidade: this.especialidade
    }).then((result) => {
      this.showAlert();    
    });  
  }

  listarEspecialidade(){
    this.provider.retornarEspecialidade().then(
      data => {
        this.especialidades = data;
      }
    )
    .catch(error => alert(error));
  }
  
  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Pré cadastro realizado.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }

  cancelar(){
    this.navCtrl.pop();
  }
}
