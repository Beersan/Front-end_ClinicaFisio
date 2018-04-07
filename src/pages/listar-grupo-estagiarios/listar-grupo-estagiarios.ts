import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CadastrarGrupoEstagiariosPage } from '../cadastrar-grupo-estagiarios/cadastrar-grupo-estagiarios';
import { GrupoEstagiarioProvider } from '../../providers/grupo-estagiario/grupo-estagiario';

/**
 * Generated class for the ListarGrupoEstagiariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-grupo-estagiarios',
  templateUrl: 'listar-grupo-estagiarios.html',
})
export class ListarGrupoEstagiariosPage {

  gruposEstagiarios: any;

  constructor(public navCtrl: NavController, 
              private provider: GrupoEstagiarioProvider,
              private alertCtrl: AlertController,
              public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.listarGrupoEstagiario();
  }
  
  incluir(){
    this.navCtrl.push(CadastrarGrupoEstagiariosPage, {
      rootNavCtrl: this.navCtrl
    });
  }  

  listarGrupoEstagiario(){
    this.provider.retornarGrupoEstagiario().then(
      data => {
        this.gruposEstagiarios = data;
        console.log(data);
      }
    )
    .catch(error => alert(error));
  }

  editar(grupo){
    this.navCtrl.push(CadastrarGrupoEstagiariosPage, {
      rootNavCtrl: this.navCtrl,
      grupo: grupo
    });
  }

  excluir(idgrupo){
    let alert = this.alertCtrl.create({
      title: 'Excluir!',
      message: 'Deseja excluir esse grupo de estagiário?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.provider.excluirGrupoEstagiario({
              idgrupo: idgrupo
            }).then((result) => {
              this.listarGrupoEstagiario();
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
      subTitle: 'Grupo de estagiário excluído.',
      buttons: ['Ok']
    });
    alert.present();
  }
}
