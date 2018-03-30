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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private provider: CadastrarEstagiarioProvider,
    private alertCtrl: AlertController
  ) {}
  
  ionViewWillEnter(){
    this.listarEstagiario();
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
              this.listarEstagiario();    
              this.showAlert();
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
        console.log(data);
      }
    )
    .catch(error => alert(error));
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Estagiário excluído.',
      buttons: ['Ok']
    });
    alert.present();
  }

 
}
