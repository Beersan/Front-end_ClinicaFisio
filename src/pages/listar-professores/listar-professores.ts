import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarProfessorPage } from '../cadastrar-professor/cadastrar-professor';
import { AlertController } from 'ionic-angular';
import { Professor } from '../../models/model.cadastrar-professor';
import { ProfessorProvider } from '../../providers/professor/professor';

@IonicPage()
@Component({
  selector: 'page-listar-professores',
  templateUrl: 'listar-professores.html',
})
export class ListarProfessoresPage {
  professores: any;
  professoresSemFiltro: any;
  especialidades: any;

  constructor(
    private alertCtrl: AlertController, 
    public navCtrl: NavController, 
    public navParams: NavParams,   
    private provider: ProfessorProvider,
  ) {
    //this.listarProfessor();
  }
  
  ionViewWillEnter(){
    this.listarProfessor();
  }

  filtrarItens(searchbar) {
    this.listarProfessor();
    let val = searchbar.target.value;
    if (val && val.trim != ''){
      this.professores = this.professores.filter((job) =>{
        return (job.nomeprofessor.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  /*filtrarItens(searchbar) {
    this.professores = this.professoresSemFiltro;
    var q = searchbar.target.value;
    if (!q) {
      return;
    }
  console.log(this.professores);
    this.professores = this.professores.filter((v) => {
      if(v.matriculaprofessor && q) {
        if (v.nomeprofessor.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
          return false;
      }
    });*/


  incluir(){
    this.navCtrl.push(CadastrarProfessorPage, {
      rootNavCtrl: this.navCtrl
    });
  }

  listarProfessor(){
    this.provider.retornarProfessor().then(
      data => {
        this.professores = data;
        //console.log(data);
      }
    )
    .catch(error => alert(error));
  }

  excluirProfessor(idprofessor){
    let alert = this.alertCtrl.create({
      title: 'Excluir!',
      message: 'Deseja excluir esse professor?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.provider.excluirProfessor({
              idProfessor: idprofessor
            }).then((result) => {
              this.listarProfessor();
              this.showAlert();
            });
          }
        }
      ]
    });
    alert.present();
  }

  editar(professor: Professor){
    this.navCtrl.push(CadastrarProfessorPage, {
      rootNavCtrl: this.navCtrl,
      professor: professor
    });
  }


  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Professor excluído.',
      buttons: ['Ok']
    });
    alert.present();
  }
}
