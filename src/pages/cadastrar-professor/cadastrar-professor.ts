import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm, FormsModule, FormBuilder, Validators} from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
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
  tipoEstagio: any;
  cadastroProfessor: any= {};
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
  idEstagio: any;
  estagios: any;
  estagio: any;

  constructor(
  	public navCtrl: NavController,
    public navParams: NavParams,
    public provider: ProfessorProvider,
    private http: HttpClient,
    public alertCtrl: AlertController,
    private formBuilder:FormBuilder
  ){
    this.listarEspecialidade(this.dadoprofessores);
    this.listarEstagio(this.dadoprofessores);
    //console.log(this.especialidade);
    if (this.navParams.data.professor) {      
      this.professores = this.navParams.data.professor;
      //console.log(this.professor);
      var text = JSON.stringify(this.professores);
      var obj = JSON.parse(text);
      this.idProfessor = obj.idprofessor;
      this.nomeProfessor = obj.nomeprofessor;
      this.matriculaProfessor = obj.matriculaprofessor;
      this.crefitoProfessor = obj.crefitoprofessor;
      this.emailProfessor = obj.emailprofessor;
      this.telefone = obj.telefoneprofessor;
      this.especialidade = obj.codigoespecialidade;
      this.estagio = obj.idestagio;
      //console.log(this.especialidade);
    }
    this.cadastroProfessor = formBuilder.group ({
      nomeProfessor:['', Validators.required],
      matriculaProfessor:['', Validators.required],
      crefitoProfessor:['', Validators.required],
      emailProfessor:['', Validators.required],
      telefone:['', Validators.required],
      especialidade:['', Validators.required],
      tipoEstagio:['', Validators.required]
    })
  }

  cadastrarProfessor(){
  	this.provider.gravarProfessor({
  		nomeProfessor: this.nomeProfessor,
  		matriculaProfessor: this.matriculaProfessor,
  		crefitoProfessor: this.crefitoProfessor,
  		emailProfessor: this.emailProfessor,
  		telefone: this.telefone,
      especialidade: this.especialidade,
      //tipoDeEstagio: this.tipoEstagio,
      idProfessor: this.idProfessor,
      estagio: this.estagio,
    })
    .then((result) => {
      this.showAlert();    
    });   
  }

  listarEspecialidade(idEspecialidade){
    if(this.especialidades == null){
    this.provider.listarEspecialidade().then(
      data => {
        this.especialidades = data;
      }
    )
    .catch(error => alert(error));
  }
}

listarEstagio(idEstagio){
    if(this.estagios == null){
      this.provider.listarEstagio().then(
        data => {
          this.estagios = data;
          console.log(this.estagios);
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
