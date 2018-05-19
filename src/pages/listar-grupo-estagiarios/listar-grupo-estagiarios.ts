import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CadastrarGrupoEstagiariosPage } from '../cadastrar-grupo-estagiarios/cadastrar-grupo-estagiarios';
import { GrupoEstagiarioProvider } from '../../providers/grupo-estagiario/grupo-estagiario';
import { CadastrarGrupoEstagiario } from '../../models/model.cadastrar-grupo-estagiario';

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
  estagios: any;
  estagio: any;
  codigo: any;
  grupo: any;
  gruposEstagiariosComId: any;
  insereDados: any;
  gruposEstagiarios: any;
  gruposEstagiariosSemFiltro: any;
  constructor(public navCtrl: NavController, 
              private provider: GrupoEstagiarioProvider,
              private alertCtrl: AlertController,
              public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.listarGrupoEstagiario();
  }
  
  filtrarItens(searchbar) {
    this.gruposEstagiarios= this.gruposEstagiariosSemFiltro;
    var q = searchbar.srcElement.value;
    if (!q) {
      return;
    }
  console.log(this.gruposEstagiarios);
    this.gruposEstagiarios = this.gruposEstagiarios.filter((v) => {
      if(v.descricaogrupo && q) {
        if (v.descricaogrupo.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
          return false;
      }
    });
  
    console.log(q, this.gruposEstagiarios.length);
  
    console.log(q, this.estagiarios.length);
  
  }
  
  incluir(){
    this.navCtrl.push(CadastrarGrupoEstagiariosPage, {
      rootNavCtrl: this.navCtrl
    });
  } 
  
  alterarestagio(grupo){
    this.provider.retornarGrupoEstagiarioComId().then(
      data => {
        this.gruposEstagiariosComId = data;
        console.log(this.gruposEstagiariosComId);
      }
    )
    .catch(error => alert(error));
    if(this.estagios == null){
      this.provider.alterarEstagio({grupo: grupo.idgrupo}).then(
        data => {
          this.estagios = data;
          this.listarEstagioEditar(grupo.idgrupo, this.gruposEstagiariosComId);
          console.log(this.gruposEstagiariosComId);
        }
      )
      
      .catch(error => alert(error));
    }
  }

  listarEstagioEditar(idgrupo, retornoid){

    let itensSelect = []; 
    for (let valor of this.estagios) {
      itensSelect.push({type: 'radio', label: valor.descricaoestagio, value: valor.idestagio});
    }

    let prompt = this.alertCtrl.create({
      title: 'Alterar estágio',
      message: 'Selecione o próximo estágio ',
      
      inputs : itensSelect,
      buttons : [
      {
          text: "Cancel", 
          handler: data => {
          console.log("cancel clicked");
          }
      },
      {
          text: "Confirma",
          handler: data => {
            console.log(retornoid);
            this.provider.createAlterarEstagio({
              grupo: retornoid.idgrupo,
              estagio: data,
              estagiarios: retornoid.idestagiario
            }).then((result) =>{
              console.log(result);
              this.showAlertSucesso();
            })
            .catch(error => alert(error));
          }
      }]});
      prompt.present();
  }

  listarGrupoEstagiarioComId(){
    this.provider.retornarGrupoEstagiarioComId().then(
      data => {
        this.gruposEstagiarios = data;
        this.estagiarios = data;
        this.gruposEstagiariosSemFiltro = data;
        console.log(data);
      }
    )
    .catch(error => alert(error));
  }

  listarGrupoEstagiario(){
    this.provider.retornarGrupoEstagiario().then(
      data => {
        this.gruposEstagiarios = data;
        this.estagiarios = data;
        this.gruposEstagiariosSemFiltro = data;
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

  showAlertSucesso() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Estágio alterado com sucesso.',
      buttons: ['Ok']
    });
    alert.present();
  }
}
