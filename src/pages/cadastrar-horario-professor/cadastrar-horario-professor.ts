import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendaProfessorProvider } from '../../providers/agenda-professor/agenda-professor';
import { AgendaProfessor } from '../../models/model.agenda-professor';
import { NgForm, FormsModule, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { provideModuleLoader } from 'ionic-angular/util/module-loader';
import { Professor } from '../../models/model.cadastrar-professor';
import { ListarProfessoresPage } from '../listar-professores/listar-professores';

@IonicPage()
@Component({
  selector: 'page-cadastrar-horario-professor',
  templateUrl: 'cadastrar-horario-professor.html',
})
export class CadastrarHorarioProfessorPage {

  professores: any;
  diaSemanas: any;
  horaInicioA: any;
  horaFimA: any;
  horarios: any = [];
  diaSemana: any;
  horaInicio: any;
  horaFim: any;
  periodo: any;
  Periodo: any;
  professor: any;
  idprofessor: any;
  professoresA: Professor;
  idprofessorA: any;
  codigoDia: any;
  cadastroHorario: any={};
  nomeProfessor: any;
  retornaProfessores: any = {};
  idsagendaprofessor: any = [];


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provider: AgendaProfessorProvider,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder
  ) {
    //var text = JSON.stringify(this.professor);
    //var obj = JSON.parse(text);
    this.professoresA = this.navParams.data.professor.idprofessor;
    this.nomeProfessor = this.navParams.data.professor.nomeprofessor;
    /*this.listarProfessor();*/
    this.listarDiaSemana();    
    this.cadastroHorario = formBuilder.group({
      diaSemana:['', Validators.required],
      horaInicio:['', Validators.required],
      horaFim:['', Validators.required],
      Periodo:['', Validators.required],
    })

  }
  ionViewDidLoad() {
  }

  listarDiaSemana(){
    this.provider.listarDiaSemana().then(
      data => {
        this.diaSemanas = data;
        this.listarPeriodo();
      }
    )
    .catch(error => alert(error));
  }

  listarHoraInicio(){
    this.provider.listarHoraInicio().then(
      data => {
        this.horaInicioA = data;
        this.listarHoraFim();        
      }
    )
  }

  listarHoraFim(){
    this.provider.listarHoraFim().then(
      data => {
        this.horaFimA = data;
        this.listarAgenda();
      }
    )
  }

  listarPeriodo(){
    this.provider.listarPeriodo().then(
      data => {
        this.listarHoraInicio();        
        this.periodo = data;
      }
    )
  }

  adicionarHorario(){
    this.horarios.push([this.diaSemana, this.horaInicio, this.horaFim, this.Periodo]);
  }

  listarAgenda(){
    var dia: any = [];
    var hInicio: any = [];
    var hFim: any = [];
    var periodos: any = [];
    var i: any = 0;
    this.provider.listarAgenda({
      idprofessor : this.professoresA,
    }).then(
      data => {
        this.retornaProfessores = data;
        for(let line of this.retornaProfessores){
          this.idsagendaprofessor = this.retornaProfessores[i].idagendaprofessor;
          dia = this.retornaProfessores[i].descricaosemana;
          hInicio = this.retornaProfessores[i].descricaohorainicio;
          hFim = this.retornaProfessores[i].descricaohorafim;
          periodos = this.retornaProfessores[i].descricaoperiodo;
          this.horarios.push([dia, hInicio, hFim, periodos]);
          i ++;
        }     
      }
    )
  }

  incluirHorario(){
    var dia: any = [];
    var hInicio: any = [];
    var hFim: any = [];
    var periodos: any = [];
    for (let line of this.horarios){
      dia.push(line[0]);
      hInicio.push(line[1]);
      hFim.push(line[2]);
      periodos.push(line[3]);
    }
    this.provider.gravarAgenda({
      idagendaprofessor : this.idsagendaprofessor,
      idprofessor : this.professoresA,
      diaSemana: dia,
      horaInicio: hInicio,
      horaFim: hFim,
      periodo: periodos,
    }).then((result) => {
      this.showAlert();    
    });  
  }

  remover(index){
    this.horarios.splice(index,1);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Horário gravado.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }

  cancelar(){
    this.navCtrl.pop();
  }
}
