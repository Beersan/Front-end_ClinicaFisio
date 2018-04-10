import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GrupoEstagiarioProvider } from '../../providers/grupo-estagiario/grupo-estagiario';

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
  idGrupoEditar: any;

  constructor(
    public navCtrl: NavController, 
    private provider: GrupoEstagiarioProvider,
    public alertCtrl: AlertController,
    public navParams: NavParams
  ){    
    if (this.navParams.data.grupo) {    
      this.grupos = [{idgrupo: this.navParams.data.grupo.idgrupo, descricaogrupo: this.navParams.data.grupo.descricaogrupo}];
      this.grupo = this.grupos[0].idgrupo;
      this.idGrupoEditar = this.navParams.data.grupo.idgrupo;
      this.listarEstagiarioEditar(this.idGrupoEditar);
    }
  }

  ionViewDidLoad() {
    this.listarGrupo();
    this.listarEstagiario();
  }

  cadastrarGrupoEstagiario(){ 
    for (let linha of this.estagiarios){
      if (linha.checked != "false" && linha.checked != false){ // verei uma melhor forma quando puder. Bj
        this.codigos.push(linha.idestagiario);
      }     
    }  
    this.provider.create({
      grupo: this.grupo,
      codigos: this.codigos
    }).then((result) =>{
      this.showAlert();
    });
  }

  listarGrupo(){
    if(this.grupos == null){
      this.provider.retornarGrupo().then(
        data => {
            this.grupos = data;
          }
        )
        .catch(error => alert(error));
    } 
  }

  listarEstagiario(){
    if(this.idGrupoEditar == null){
      this.provider.retornarEstagiario().then(
        data => {
           this.estagiarios = data;
        }
      )
      .catch(error => alert(error));
    }
  }

  listarEstagiarioEditar(idGrupo){
    this.provider.retornarEstagiarioEditar({
      idGrupo: idGrupo
    }).then(
      data => {
        this.estagiarios = data;
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
