import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RelatarProblemaProvider } from '../../providers/problema/problema';
import { AgendaProvider } from '../../providers/agenda/agenda';

@IonicPage()
@Component({
  selector: 'page-evolucao-diaria',
  templateUrl: 'evolucao-diaria.html',
})
export class EvolucaoDiariaPage {
  evolucaoDiaria: any;
  dadosSessao:any;
  idgerenciaratendimento: any
  descricaoEvolucao: any;
  status: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private alertCtrl: AlertController,
    public provider: AgendaProvider
  ){
    if (this.navParams.data.sessao) {      
      this.dadosSessao = JSON.parse(JSON.stringify(this.navParams.data.sessao));            
      this.idgerenciaratendimento = this.dadosSessao.idgerenciaratendimento;
      this.status = this.navParams.data.status;
      if(this.dadosSessao.evolucaodiaria != null && this.dadosSessao.evolucaodiaria != ""){
        this.descricaoEvolucao = this.dadosSessao.evolucaodiaria;
      }
    }

    this.evolucaoDiaria = formBuilder.group ({
      descricaoEvolucao:['', Validators.required]
    })
  }

  gravar(){    
    this.provider.gravarEvolucao({
      evolucaodiaria: this.descricaoEvolucao,
      idgerenciaratendimento: this.idgerenciaratendimento
    }).then((result) => {
      this.showAlert();    
    });  
  }

  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Evolução diária gravada.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }
  
  cancelar(){
    this.navCtrl.pop();
  }
}
