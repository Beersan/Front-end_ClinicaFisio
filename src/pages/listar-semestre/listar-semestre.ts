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

  constructor(
    public navCtrl: NavController, 
    private provider: SemestreProvider,
    private alertCtrl: AlertController,
    public navParams: NavParams
  ) {}

  ionViewWillEnter(){
    this.listarSemestre();
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

}
