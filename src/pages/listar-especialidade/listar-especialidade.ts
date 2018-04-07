import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarEspecialidadePage } from '../cadastrar-especialidade/cadastrar-especialidade';
import { CadastrarEspecialidadeProvider } from '../../providers/especialidade/especialidade';
import { Especialidade } from './../../models/model.cadastrar-especialidade';
import { updateDate } from 'ionic-angular/util/datetime-util';
import { AlertController } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-listar-especialidade',
  templateUrl: 'listar-especialidade.html',
})

export class ListarEspecialidadePage {
  especialidades: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: CadastrarEspecialidadeProvider,
    private alertCtrl: AlertController
  ) {}

  ionViewWillEnter(){
    this.listarEspecialidade();
  }

  incluir(){
    this.navCtrl.push(CadastrarEspecialidadePage, {
      rootNavCtrl: this.navCtrl
    });
  }

  editar(especialidade: Especialidade){
    this.navCtrl.push(CadastrarEspecialidadePage, {
      rootNavCtrl: this.navCtrl,
      especialidade: especialidade
    });
  }

  excluir(codigoEspecialidade){
    let alert = this.alertCtrl.create({
      title: 'Excluir!',
      message: 'Deseja excluir esta especialidade?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.provider.excluirEspecialidade({
              codigoEspecialidade: codigoEspecialidade
            }).then((result) => {
              this.listarEspecialidade();
              this.showAlert();
            });
          }
        }
      ]
    });
    alert.present();
  }

  listarEspecialidade(){
    this.provider.retornarEspecialidade().then(
      data => {
        this.especialidades = data;
        console.log(data);
      }
    )
    .catch(error => alert(error));
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Especialidade excluída.',
      buttons: ['Ok']
    });
    alert.present();
  }

  cancelar(){
    this.navCtrl.pop();
  }
}
