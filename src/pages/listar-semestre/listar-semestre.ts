import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CadastroSemestrePage } from '../cadastro-semestre/cadastro-semestre';
import { SemestreProvider } from '../../providers/semestre/semestre';
import { Semestre } from '../../models/model.semestre';

@IonicPage()
@Component({
  selector: 'page-listar-semestre',
  templateUrl: 'listar-semestre.html',
})
export class ListarSemestrePage {

  semestres: any;
  SemestresSemFiltro: any;

  constructor(
    public navCtrl: NavController, 
    private provider: SemestreProvider,
    private alertCtrl: AlertController,
    public navParams: NavParams
  ) {}

  ionViewWillEnter(){
    this.listarSemestre();
  }

  alterarStatus(idSemestre, tipo){
    var descricao;
    if(tipo == 0){
      descricao = 'Desbloquear';
    } else {
      descricao = 'Bloquear';
    }
    let alert = this.alertCtrl.create({
      title: 'Alteração!',
      message: 'Deseja ' + descricao + ' esse semestre?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: descricao,
          handler: () => {
            this.provider.alterarStatus({
              idSemestre: idSemestre
            }).then((result) => {
              this.showAlertStatus();    
              this.listarSemestre();
            });    
          }
        }
      ]
    });
    alert.present();
  }

  incluir(){
    this.navCtrl.push(CadastroSemestrePage, {
      rootNavCtrl: this.navCtrl
    });
  }

  editar(semestre: Semestre){
    this.navCtrl.push(CadastroSemestrePage, {
      rootNavCtrl: this.navCtrl,
      semestre: semestre
    });
  }  

  listarSemestre(){
    this.provider.retornarEstagiario().then(
      data => {
        this.semestres = data;
        this.SemestresSemFiltro = data;
      }
    )
    .catch(error => alert(error));
  }

  excluir(idSemestre){
    let alert = this.alertCtrl.create({
      title: 'Excluir!',
      message: 'Deseja excluir esse semestre?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.provider.excluirEstagiario({
              idSemestre: idSemestre
            }).then((result) => {
              this.listarSemestre();
              this.showAlert();
            });
          }
        }
      ]
    });
    alert.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Semestre excluído.',
      buttons: ['Ok']
    });
    alert.present();
  }

  showAlertStatus() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Semestre alterado.',
      buttons: ['Ok']
    });
    alert.present();
  }

  filtrarItens(searchbar) {
    this.semestres = this.SemestresSemFiltro;
    var q = searchbar.srcElement.value;
    if (!q) {
      return;
    }
  
    this.semestres = this.semestres.filter((v) => {
      if(v.nomesemestre && q) {
        if (v.nomesemestre.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
          return false;
      }
    });  
  }  
}
