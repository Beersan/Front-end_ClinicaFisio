import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { NgForm, FormsModule } from '@angular/forms';
import { PreCadastro } from '../../models/model.pre-cadastro';
import { PreCadastroProvider } from '../../providers/pre-cadastro/pre-cadastro';
import { AlertController } from 'ionic-angular';
import { ArquivosProvider } from '../../providers/arquivos/arquivos';

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
  files:Array<any>;
  linkAnexo:any = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: PreCadastroProvider,
    private alertCtrl: AlertController,
    private arquivos: ArquivosProvider
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
      especialidade: this.especialidade,
      linkAnexo: this.linkAnexo
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

  detectarArquivos(event) {
    console.log('Detectando arquivos');
    let fileList: FileList = event.target.files;
    let reader = new FileReader();
    reader.onloadend= (e) => {
      this.files = Array.from(event.target.files);
      console.log('Arquivo Detectado');
      this.upload();
    }
    reader.readAsDataURL(fileList.item(0));   
  }

  upload() {
    let file = this.files[0];
      this.arquivos.upload(
        file
    ).then(
      data => {
        this.linkAnexo=data;
        console.log(data);
      }
    );
  }

  visualizar() {
    this.linkAnexo;
    window.open(this.linkAnexo,'blank');
  }
}
