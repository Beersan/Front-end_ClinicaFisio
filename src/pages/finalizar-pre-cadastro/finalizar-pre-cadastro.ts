import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NgForm, FormsModule, Validators, FormBuilder } from '@angular/forms';
import { PreCadastroProvider } from '../../providers/pre-cadastro/pre-cadastro';

@IonicPage()
@Component({
  selector: 'page-finalizar-pre-cadastro',
  templateUrl: 'finalizar-pre-cadastro.html',
})

export class FinalizarPreCadastroPage {
  paciente: any;
  especialidades: any;
  especialidade: any;
  nomePaciente: any;
  registroGeral: any;
  CPF: any;
  dataNascimento: any;
  rendaFamiliar: any;
  endereco: any;
  numero: any;
  bairro: any;
  cidade: any;
  telefoneUm: any;
  telefoneDois: any;
  observacao: any;
  dadosPaciente: any;
  validarCadastro: any = {};
  constructor( 
    public navCtrl: NavController, 
    public navParams: NavParams,
    private providerPreCadastro: PreCadastroProvider,
    private alertCtrl: AlertController,
    private formBuilder: FormBuilder
  ) {
    if (this.navParams.data.paciente) {      
      this.paciente = this.navParams.data.paciente;      
      this.dadosPaciente = JSON.parse(JSON.stringify(this.paciente));
      this.listarEspecialidade(this.dadosPaciente.codigoespecialidade);
      this.nomePaciente = this.dadosPaciente.nomepaciente;
      this.registroGeral = this.dadosPaciente.rgpaciente;
      this.CPF = this.dadosPaciente.cpfpaciente;
      this.dataNascimento = this.dadosPaciente.datanascpaciente;
      this.rendaFamiliar = this.dadosPaciente.rendapaciente;
      this.endereco = this.dadosPaciente.enderecopaciente;
      this.numero = this.dadosPaciente.numeropaciente;
      this.bairro = this.dadosPaciente.bairropaciente;
      this.cidade = this.dadosPaciente.cidadepaciente;
      this.telefoneUm = this.dadosPaciente.contato1paciente;
      this.telefoneDois = this.dadosPaciente.telefone2;      
    }
    this.validarCadastro = formBuilder.group ({
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
      observacao:['', ''],      
    })  
  }

  aprovarCadastro(){
    this.providerPreCadastro.aprovarCadastro({
      idpaciente: this.dadosPaciente.idpaciente,
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
      especialidade: this.especialidade,
      observacao: this.observacao
    }).then((result) => {
      this.showAlert();    
    }); 
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Paciente aprovado e encaminhado para a fila de espera.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }

  listarEspecialidade(especialidade){
    this.providerPreCadastro.retornarEspecialidade().then(
      data => {
        this.especialidades = data;
        this.especialidade = especialidade;
      }
    )
    .catch(error => alert(error));
  }

  cancelar(){
    this.navCtrl.pop();
  }
}
