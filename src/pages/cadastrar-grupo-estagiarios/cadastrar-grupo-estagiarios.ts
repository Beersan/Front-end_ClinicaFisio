import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GrupoEstagiarioProvider } from '../../providers/grupo-estagiario/grupo-estagiario';
import { NgForm, FormsModule,Validators, FormBuilder } from '@angular/forms';

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
  //idProfessorEditar: any;
  idEstagioEditar: any;
  professores: any;
  estagio: any;
  estagios: any;
  cadastroGrupoEstagiario: any;

  constructor(
    public navCtrl: NavController, 
    private provider: GrupoEstagiarioProvider,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public navParams: NavParams
  ){    
    if (this.navParams.data.grupo) {    
      this.grupos = [{idgrupo: this.navParams.data.grupo.idgrupo, descricaogrupo: this.navParams.data.grupo.descricaogrupo, idestagio: this.navParams.data.grupo.idestagio, descricaoestagio: this.navParams.data.grupo.descricaoestagio}];
      this.estagios = [{idgrupo: this.navParams.data.grupo.idgrupo, descricaogrupo: this.navParams.data.grupo.descricaogrupo, idestagio: this.navParams.data.grupo.idestagio, descricaoestagio: this.navParams.data.grupo.descricaoestagio}];
      this.grupo = this.grupos[0].idgrupo;
      this.estagio = this.estagios[0].idestagio;
      this.idGrupoEditar = this.navParams.data.grupo.idgrupo;
      this.idEstagioEditar = this.navParams.data.grupo.idestagio;  
      
         
      this.listarEstagiarioEditar(this.idGrupoEditar);
      
    } this.cadastroGrupoEstagiario = formBuilder.group ({
      grupo:['', Validators.required],
      estagio:['', Validators.required]
    })
  }

  ionViewDidLoad() {
    this.listarGrupo();
    this.listarEstagiario();
    this.listarEstagio();
    //this.listarProfessor();
  }

  cadastrarGrupoEstagiario(){ 
    for (let linha of this.estagiarios){
      if (linha.checked != "false" && linha.checked != false){ // verei uma melhor forma quando puder. Bj
        this.codigos.push(linha.idestagiario);
      }     
    }  
    this.provider.create({
      grupo: this.grupo,
      codigos: this.codigos,
      estagio: this.estagio
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

  listarEstagio(){
    if(this.estagios == null){
      this.provider.retornarEstagio().then(
        data => {
            this.estagios = data;
            //if(this.idEstagioEditar != null){
              //this.estagio = this.idEstagioEditar;
           // }
          }
        )
        .catch(error => alert(error));
    } 
  }

  /*listarProfessor(){
    this.provider.retornarProfessor({professor: this.idProfessorEditar}).then(
      data => {
        this.professores = data;
        if(this.idProfessorEditar != null){
          this.professor = this.idProfessorEditar;                  
        }
      }
    )
    .catch(error => alert(error));
  }*/

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
