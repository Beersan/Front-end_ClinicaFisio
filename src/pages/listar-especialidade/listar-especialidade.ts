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
  especialidadesSemFiltro: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: CadastrarEspecialidadeProvider,
    private alertCtrl: AlertController
  ) {}

  ionViewWillEnter(){
    this.listarEspecialidade();
  }

  filtrarItens(searchbar) {
    // Reset items back to all of the items
    this.especialidades= this.especialidadesSemFiltro;
  
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;
  
  
    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
  
    this.especialidades = this.especialidades.filter((v) => {
      if(v.descricaoespecialidade && q) {
        if (v.descricaoespecialidade.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
          return false;
      }
    });
  
    console.log(q, this.especialidades.length);
  
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
        this.especialidadesSemFiltro = this.especialidades;
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
}
