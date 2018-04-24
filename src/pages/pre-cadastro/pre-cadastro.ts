import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Alert, AlertController } from 'ionic-angular';
import { NgForm, FormsModule, Validators, FormBuilder } from '@angular/forms';
import { PreCadastro } from '../../models/model.pre-cadastro';
import { PreCadastroProvider } from '../../providers/pre-cadastro/pre-cadastro';
import { ArquivosProvider } from '../../providers/arquivos/arquivos';

@IonicPage()
@Component({
  selector: 'page-pre-cadastro',
  templateUrl: 'pre-cadastro.html',
})
export class PreCadastroPage {
  validarPreCadastro: any = {};
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
  encaminhamento: String;
  especialidades: any;
  especialidade: any;
  files:Array<any>;
  linkAnexo:any = "";
  classeFile: string = 'ocultar';
  classeIcone: string = 'ocultar';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: PreCadastroProvider,
    private alertCtrl: AlertController,
    private arquivos: ArquivosProvider,
    private formBuilder: FormBuilder
  ) {
    this.listarEspecialidade();
    this.validarPreCadastro = formBuilder.group ({
      nomePaciente:['', Validators.required],
      registroGeral:['', Validators.required],      
      CPF:['', Validators.required],
      dataNascimento:['', Validators.required],
      rendaFamiliar:['', Validators.required],
      endereco:['', Validators.required],
      numero:['', Validators.required],
      bairro:['', Validators.required],
      cidade:['', Validators.required],
      telefoneUm:['', Validators.compose([Validators.required])],      
      telefoneDois:['', ''],      
      especialidade:['', Validators.required],
      encaminhamento:['', Validators.required],
    })
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
    let fileList: FileList = event.target.files;
    let reader = new FileReader();
    reader.onloadend= (e) => {
      this.files = Array.from(event.target.files);
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
        this.linkAnexo = data;                
        this.classeIcone = 'mostrar';
      }
    );
  }

  visualizar() {
    this.linkAnexo;
    window.open(this.linkAnexo,'blank');
  }

  verificaEncaminhamento(valor: any){
    if (valor == "S"){
      this.classeFile = 'mostrar';
    }else{
      this.classeFile = 'ocultar';
    }
  }
}
