import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm, FormsModule } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
//import { ListarProfessorPage } from '../listar-professor/listar-professor';
import { Professor } from '../../models/model.cadastrar-professor';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { provideModuleLoader } from 'ionic-angular/util/module-loader';
import { ProfessorProvider } from '../../providers/professor/professor';

@IonicPage()
@Component({
  selector: 'page-cadastrar-professor',
  templateUrl: 'cadastrar-professor.html',
})

export class CadastrarProfessorPage {
  professores: any[];
  dadoprofessores: any;
  especialidades: any;
  professor: Professor;
  nomeProfessor: string;
  matriculaProfessor: string;
  crefitoProfessor: string;
  emailProfessor: string;
  telefone: string;
  especialidade: string;
  idEspecialidade: any;
  idProfessor = "";

  constructor(
  	public navCtrl: NavController,
    public navParams: NavParams,
    public provider: ProfessorProvider,
    private http: HttpClient,
    public alertCtrl: AlertController
  ){
    this.listarEspecialidade(this.dadoprofessores);
    console.log(this.especialidade);
    if (this.navParams.data.professor) {      
      this.professores = this.navParams.data.professor;
      console.log(this.professor);
      var text = JSON.stringify(this.professores);
      var obj = JSON.parse(text);
      this.idProfessor = obj.idprofessor;
      this.nomeProfessor = obj.nomeprofessor;
      this.matriculaProfessor = obj.matriculaprofessor;
      this.crefitoProfessor = obj.crefitoprofessor;
      this.emailProfessor = obj.emailprofessor;
      this.telefone = obj.telefoneprofessor;
      this.especialidade = obj.idespecialidade;
      console.log(this.especialidade);
    }
  }

  cadastrarProfessor(){
  	this.provider.gravarProfessor({
  		nomeProfessor: this.nomeProfessor,
  		matriculaProfessor: this.matriculaProfessor,
  		crefitoProfessor: this.crefitoProfessor,
  		emailProfessor: this.emailProfessor,
  		telefone: this.telefone,
  		especialidade: this.especialidade,
  		idProfessor: this.idProfessor
    })
    .then((result) => {
      this.showAlert();    
    });   
  }

  listarEspecialidade(idEspecialidade){
    if(this.especialidades == null){
    this.provider.listar().then(
      data => {
        this.especialidades = data;
        //this.idEspecialidade = idEspecialidade;
      }
      
    )
    .catch(error => alert(error));
  }
}

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Professor gravado.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }

  cancelar(){
    this.navCtrl.pop();
  }

}
