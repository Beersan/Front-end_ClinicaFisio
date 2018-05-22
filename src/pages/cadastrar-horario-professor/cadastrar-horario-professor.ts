import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AgendaProfessorProvider } from '../../providers/agenda-professor/agenda-professor';
import { AgendaProfessor } from '../../models/model.agenda-professor';
import { NgForm, FormsModule } from '@angular/forms';
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
  professor: any;
  idprofessor: any;
  professoresA: Professor;
  idprofessorA: any;
  codigoDia: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provider: AgendaProfessorProvider,
    public alertCtrl: AlertController,
  ) {
    //var text = JSON.stringify(this.professor);
    //var obj = JSON.parse(text);
    this.professoresA = this.navParams.data.professor;
    /*this.listarProfessor();*/
    this.listarDiaSemana();
    this.listarHoraInicio();
    this.listarHoraFim();

  }
  ionViewDidLoad() {
  }
  
  /*listarProfessor(){
    this.provider.listarProfessor().then(
      data => {
        this.professores = data;        
     }
    )
    .catch(error => alert(error));
  }*/

  listarDiaSemana(){
    this.provider.listarDiaSemana().then(
      data => {
        this.diaSemanas = data;
      }
    )
    .catch(error => alert(error));
  }

  listarHoraInicio(){
    this.provider.listarHoraInicio().then(
      data => {
        this.horaInicioA = data;
      }
    )
  }

  listarHoraFim(){
    this.provider.listarHoraFim().then(
      data => {
        this.horaFimA = data;
      }
    )
  }
  adicionarHorario(){
    this.horarios.push([this.diaSemana, this.horaInicio, this.horaFim]);
  }

  incluirHorario(){
    var dia: any = [];
    var hInicio: any = [];
    var hFim: any = [];
    for (let line of this.horarios){
      dia.push(line[0]);
      hInicio.push(line[1]);
      hFim.push(line[2]);
    }
    this.provider.inserirAgenda({
      idprofessor : this.professoresA,
      diaSemana: dia,
      horaInicio: hInicio,
      horaFim: hFim,
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
    this.navCtrl.push(ListarProfessoresPage, {
    });
  }

  cancelar(){
    this.navCtrl.push(ListarProfessoresPage, {
    });
  }
}
