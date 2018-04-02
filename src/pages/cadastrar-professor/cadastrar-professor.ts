import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm, FormsModule } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
//import { ListarProfessorPage } from '../listar-professor/listar-professor';
import { ProfessorProvider} from './../../providers/professor/professor';
import { Professor } from '../../models/model.cadastrar-professor';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { provideModuleLoader } from 'ionic-angular/util/module-loader';

@IonicPage()
@Component({
  selector: 'page-cadastrar-professor',
  templateUrl: 'cadastrar-professor.html',
})

export class CadastrarProfessorPage {
  //professor: any[];
  professor: Professor;
  nomeProfessor: string;
  matriculaProfessor: string;
  crefitoProfessor: string;
  emailProfessor: string;
  telefoneProfessor: string;
  especialidadeProfessor: string;
  idProfessor = "";



  constructor(
  	public navCtrl: NavController,
    public navParams: NavParams,
    public provider: ProfessorProvider,
    private http: HttpClient,
    public alertCtrl: AlertController
    ){
    if (this.navParams.data.professor) {      
      this.professor = this.navParams.data.professor;
      console.log(this.professor);
      var text = JSON.stringify(this.professor);
      var obj = JSON.parse(text);
      this.nomeProfessor = obj.nomeProfessor;
      this.matriculaProfessor = obj.matriculaProfessor;
      this.crefitoProfessor = obj.crefitoProfessor;
      this.emailProfessor = obj.emailProfessor;
      this.telefoneProfessor = obj.telefoneProfessor;
      this.especialidadeProfessor = obj.especialidadeProfessor;
  }
}
  cadastrarProfessor(){
  	this.provider.gravarProfessor({
  		nomeProfessor: this.nomeProfessor,
  		matriculaProfessor: this.matriculaProfessor,
  		crefitoProfessor: this.crefitoProfessor,
  		emailProfessor: this.emailProfessor,
  		telefoneProfessor: this.telefoneProfessor,
  		especialidadeProfessor: this.especialidadeProfessor,
  		idProfessor: this.idProfessor
    });
    // THEN PRECISA DE PROMISE NA FUNCAO DE REQUEST (gravarProfessor)
    // .then((result) => {
    //   console.log(result);
    //   this.showAlert();    
    // });   
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Professor cadastrado.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarProfessorPage');
  }

}
