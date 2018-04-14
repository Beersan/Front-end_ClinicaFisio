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
  estagiarios: any;
  gruposEstagiarios: any;
  estagiariosSemFiltro: any;
  constructor(public navCtrl: NavController, 
              private provider: GrupoEstagiarioProvider,
              private alertCtrl: AlertController,
              public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.listarGrupoEstagiario();
  }
  
  filtrarItens(searchbar) {
    this.estagiarios= this.estagiariosSemFiltro;
    var q = searchbar.srcElement.value;
    if (!q) {
      return;
    }

    this.estagiarios = this.estagiarios.filter((v) => {
      if(v.nomes && q) {
        if (v.nomes.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
          return false;
      }
    });
  
    console.log(q, this.estagiarios.length);
  
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
        this.estagiarios = data;
        this.estagiariosSemFiltro = data;
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
