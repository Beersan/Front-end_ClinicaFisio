import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastrarEstagiarioPage } from '../cadastrar-estagiario/cadastrar-estagiario';
import { CadastrarEstagiarioProvider } from '../../providers/estagiario/estagiario';
import { Estagiario } from './../../models/model.cadastrar-estagiario';
import { updateDate } from 'ionic-angular/util/datetime-util';
import { AlertController } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-listar-estagiario',
  templateUrl: 'listar-estagiario.html',
})

export class ListarEstagiarioPage {
  estagiarios: any;
  estagiariosSemFiltro: any;
  resultado: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: CadastrarEstagiarioProvider,
    private alertCtrl: AlertController
  ) {}

  ionViewWillEnter(){
    this.listarEstagiario();
  }


  filtrarItens(searchbar) {
  
    this.estagiarios = this.estagiariosSemFiltro;

    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;
  
  
    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
  
    this.estagiarios = this.estagiarios.filter((v) => {
      if(v.matriculaestagiario && v.nomeestagiario && q) {
        if (
          v.nomeestagiario.toLowerCase().indexOf(q.toLowerCase()) > -1
          ||
          v.matriculaestagiario.toLowerCase().indexOf(q.toLowerCase()) > -1
        ) {
          return true;
        }
          return false;
      }
    });
  
    console.log(q, this.estagiarios.length);
  
  }

  incluir(){
    this.navCtrl.push(CadastrarEstagiarioPage, {
      rootNavCtrl: this.navCtrl
    });
  }

  editar(estagiario: Estagiario){
    this.navCtrl.push(CadastrarEstagiarioPage, {
      rootNavCtrl: this.navCtrl,
      estagiario: estagiario
    });
  }

  excluir(idEstagiario){
    let alert = this.alertCtrl.create({
      title: 'Excluir!',
      message: 'Deseja excluir esse estagiário?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          handler: () => {
            this.provider.excluirEstagiario({
              idEstagiario: idEstagiario
            }).then((result) => {
              this.resultado = result;
              if(this.resultado.message == "ok"){
                this.listarEstagiario();
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

  listarEstagiario(){
    this.provider.retornarEstagiario().then(
      data => {
        this.estagiarios = data;
        this.estagiariosSemFiltro = this.estagiarios;
        console.log(data);
      }
    )
    .catch(error => alert(error));
  }

  alertConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Estagiário excluído.',
      buttons: ['Ok']
    });
    alert.present();
  }

  alertErro() {
    let alert = this.alertCtrl.create({
      title: 'Atenção!',
      subTitle: 'Estagiario vinculado em um grupo de estagiários.',
      buttons: ['Ok']
    });
    alert.present();
  }


}
