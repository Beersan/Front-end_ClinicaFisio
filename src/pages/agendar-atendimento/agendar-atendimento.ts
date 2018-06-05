import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { NgForm, FormsModule, Validators, FormBuilder } from '@angular/forms';
import { AgendaProvider } from '../../providers/agenda/agenda';

@IonicPage()
@Component({
  selector: 'page-agendar-atendimento',
  templateUrl: 'agendar-atendimento.html',
})
export class AgendarAtendimentoPage {
  paciente: any;
  pacientes: any;
  diaDaSemana: any;
  dias: any;
  horario: any;
  horarios: any;
  numeroSessoes: any;
  dataInicioAtendimento: any;
  professor: any;
  professores: any;
  dadosPaciente : any;
  validarAgendarAtendimento: any = {};
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private provider: AgendaProvider,
    public alertCtrl: AlertController,
    private formBuilder: FormBuilder
  ){
    if (this.navParams.data.paciente) {       
      this.dadosPaciente = JSON.parse(JSON.stringify(this.navParams.data.paciente));
      this.pacientes = [{idpaciente: this.dadosPaciente.idpaciente, nomepaciente: this.dadosPaciente.nomepaciente}];
      this.paciente = this.dadosPaciente.idpaciente;
      this.listarProfessor();
    }
    this.validarAgendarAtendimento = formBuilder.group ({
      paciente:['', Validators.required],
      diaDaSemana:['', Validators.required],      
      horario:['', Validators.required],
      numeroSessoes:['', Validators.required],
      dataInicioAtendimento:['', Validators.required],
      professor:['', Validators.required],
    })
  }

  ionViewDidLoad() {
    this.listarPaciente();
  }

  cancelar(){
    this.navCtrl.pop();
  }

  listarProfessor(){
    this.provider.retornarprofessor({paciente: this.paciente}).then(
      data => {
        this.professores = data;
    }).catch(error => alert(error));
  }

  listarPaciente(){
    if(this.pacientes == null){
      this.provider.retornarPaciente().then(
        data => {
          this.pacientes = data;
      }).catch(error => alert(error));
    } 
  }

  listarDia(){    
    this.provider.retornarDia({idprofessor: this.professor}).then(
      data => {
        this.dias = data;
    }).catch(error => alert(error));
  }

  listarHorario(){
    this.provider.retornarHorario({dia: this.diaDaSemana, professor: this.professor}).then(
      data => {
        this.horarios = data;
    }).catch(error => alert(error));
  }

  cadastrarAgendaPaciente(){ 
    this.provider.create({
      paciente: this.paciente,
      professor: this.professor,
      dia: this.diaDaSemana,
      horario: this.horario,
      numeroSessoes: this.numeroSessoes,
      dataInicioAtendimento: this.dataInicioAtendimento
    }).then((result) =>{
      this.showAlert();
    });
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Atendimento gravado.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }
}
