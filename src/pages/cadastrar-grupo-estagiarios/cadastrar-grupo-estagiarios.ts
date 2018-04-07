import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GrupoEstagiarioProvider } from '../../providers/grupo-estagiario/grupo-estagiario';

/**
 * Generated class for the CadastrarGrupoEstagiariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastrar-grupo-estagiarios',
  templateUrl: 'cadastrar-grupo-estagiarios.html',
})
export class CadastrarGrupoEstagiariosPage {
  grupo: any;
  grupos: any;
  estagiarios: any;
  checkItems = { };
  codigos = []; 
  idEstagiario = "";
  idGrupo = "";
  grupoEditar: any;

  constructor(public navCtrl: NavController, 
              private provider: GrupoEstagiarioProvider,
              public alertCtrl: AlertController,
              public navParams: NavParams){
  
    if (this.navParams.data.descricaogrupo) {      
      this.grupoEditar = this.navParams.data.descricaogrupo;
      console.log(this.grupoEditar);
      var text = JSON.stringify(this.grupoEditar);
      var obj = JSON.parse(text);
      this.idEstagiario = obj.idestagiario;
    } 
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarGrupoEstagiariosPage');
    this.listarGrupo();
    this.listarEstagiario();
  }

  cadastrarGrupoEstagiario(){
    console.log(this.grupo);
    
       
    for (let linha of this.estagiarios){
      if (linha.checked == true){
        this.codigos.push(linha.idestagiario);
      }     
    }
    console.log(this.codigos);    
    this.provider.create({
      grupo: this.grupo,
      codigos: this.codigos
    }).then((result) =>{
      console.log(result);
      this.showAlert();
    });
  }

  listarGrupo(){
    this.provider.retornarGrupo().then(
      data => {
        this.grupos = data;
        console.log(this.grupos);
      }
    )
    .catch(error => alert(error));
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

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Grupo de estagiarios cadastrado com sucesso.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }

  cancelar(){
    this.navCtrl.pop();
  }

  
}
