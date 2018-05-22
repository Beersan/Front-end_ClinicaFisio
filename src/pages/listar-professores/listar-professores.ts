import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CadastrarProfessorPage } from '../cadastrar-professor/cadastrar-professor';
import { AlertController } from 'ionic-angular';
import { Professor } from '../../models/model.cadastrar-professor';
import { ProfessorProvider } from '../../providers/professor/professor';
import { CadastrarHorarioProfessorPage } from '../cadastrar-horario-professor/cadastrar-horario-professor';

@IonicPage()
@Component({
  selector: 'page-listar-professores',
  templateUrl: 'listar-professores.html',
})
export class ListarProfessoresPage {
  professores: any;
  professoresSemFiltro: any;
  especialidades: any;
  agenda: any;
  constructor(
    private alertCtrl: AlertController, 
    public navCtrl: NavController, 
    public navParams: NavParams,   
    private provider: ProfessorProvider,
    private toastCtrl: ToastController
  ) {
  }

  ionViewWillEnter(){
    this.listarProfessor();
  }
  filtrarItens(searchbar) {
    let val = searchbar.target.value;
    if (val && val.trim != ''){
      this.professores = this.professores.filter((job) =>{
        return (job.nomeprofessor.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
  incluir(){
    this.navCtrl.push(CadastrarProfessorPage, {
      rootNavCtrl: this.navCtrl
    });
  }
  listarProfessor(){
    this.provider.retornarProfessor().then(
      data => {
        this.professores = data;
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
  visualizar(job) {
    var valor = JSON.parse(JSON.stringify(job));
    var mensagem = "Telefone: " + valor.telefoneprofessor + "\n"
    + "Crefito: " + valor.crefitoprofessor + "\n"
    + "E-mail: " + valor.emailprofessor

    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000,
      position: 'botton'
    }); 
    toast.present();
  }
  horarios(idprofessor){
    this.navCtrl.push(CadastrarHorarioProfessorPage, {
      rootNavCtrl: this.navCtrl,
      professor: idprofessor
    });
  }
  listarAgenda(idprofessor){
    this.provider.listarAgenda({idProfessor : idprofessor}).then(
      data => {
        this.agenda = data;
        console.log(data);
        this.presentConfirm(this.agenda);
      }
    )
    .catch(error => alert(error));
  }  
  presentConfirm(agenda) {
    var valor = JSON.parse(JSON.stringify(agenda));
    let alert = this.alertCtrl.create({
      title: 'Horários',
      message: valor.descricaohorainicio,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
        },
      ]
    });
    alert.present();
  }
}
