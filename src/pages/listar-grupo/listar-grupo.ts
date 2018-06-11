import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GrupoProvider } from '../../providers/grupo/grupo';
import { CadastrarGrupoPage } from '../cadastrar-grupo/cadastrar-grupo';
import { CadastrarGrupo } from '../../models/model.cadastrar-grupo';

@IonicPage()
@Component({
  selector: 'page-listar-grupo',
  templateUrl: 'listar-grupo.html',
})
export class ListarGrupoPage {

  grupos: any;
  gruposSemFiltro: any;
  resultado: any;
  constructor(public navCtrl: NavController, 
              private provider:GrupoProvider, 
              private alertCtrl: AlertController,
              public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.listarGrupo();
  }

  filtrarItens(searchbar) {
    this.grupos= this.gruposSemFiltro;
    var q = searchbar.srcElement.value;
    if (!q) {
      return;
    }
    this.grupos = this.grupos.filter((v) => {
      if(v.descricaogrupo && q) {
        if (v.descricaogrupo.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
          return false;
      }
    });  
    console.log(q, this.grupos.length);  
  }
  
  incluir(){
    this.navCtrl.push(CadastrarGrupoPage, {
      rootNavCtrl: this.navCtrl
    });
  }

  listarGrupo(){
    this.provider.retornarGrupo().then(
      data => {
        this.grupos = data;
        this.gruposSemFiltro = data;
      }
    )
    .catch(error => alert(error));
  }

  excluir(idGrupo){    
    let alert = this.alertCtrl.create({
      title: 'Excluir!',
      message: 'Deseja excluir esse grupo?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.provider.excluirEstagiario({
              idGrupo: idGrupo
            }).then((result) => {
              this.resultado = result;
              if(this.resultado.message == "ok"){
                this.listarGrupo();    
                this.alertConfirm();
              } else {
                this.alertErro();
              }
            }); 
          }
        }
      ]
    });
    alert.present();
  }

  alertConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Grupo excluído.',
      buttons: ['Ok']
    });
    alert.present();
  }

  alertErro() {
    let alert = this.alertCtrl.create({
      title: 'Atenção!',
      subTitle: 'Grupo vinculado em um grupo de estagiários.',
      buttons: ['Ok']
    });
    alert.present();
  }

  editar(grupo: CadastrarGrupo){
    this.navCtrl.push(CadastrarGrupoPage, {
      rootNavCtrl: this.navCtrl,
      grupo: grupo
    });
  }
}
