import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AgendaProvider } from '../../providers/agenda/agenda';
import { ArquivosProvider } from '../../providers/arquivos/arquivos';

@IonicPage()
@Component({
  selector: 'page-incluir-assinatura',
  templateUrl: 'incluir-assinatura.html',
})
export class IncluirAssinaturaPage {
  dadosSessao: any;
  idgerenciaratendimento: any;
  files: Array<any>;
  linkAnexo: any;
  status: any;
  classeIcone: string = 'ocultar';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provider: AgendaProvider,
    private alertCtrl: AlertController,
    private arquivos: ArquivosProvider
  ) {
    if (this.navParams.data.sessao) {      
      this.dadosSessao = JSON.parse(JSON.stringify(this.navParams.data.sessao));            
      this.idgerenciaratendimento = this.dadosSessao.idgerenciaratendimento;
      this.status = this.navParams.data.status;
      if(this.dadosSessao.assinatura != null && this.dadosSessao.assinatura != ""){
        this.linkAnexo = this.dadosSessao.assinatura;                
        this.classeIcone = 'mostrar';
      }
    }
  }
  
  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Presença confirmada.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }

  gravar(){    
    this.provider.gravarAssinatura({
      assinatura: this.linkAnexo,
      idgerenciaratendimento: this.idgerenciaratendimento
    }).then((result) => {
      this.showAlert();    
    });  
  }

  cancelar(){
    this.navCtrl.pop();
  }

  detectarArquivos(event) {
    let fileList: FileList = event.target.files;
    let reader = new FileReader();
    reader.onloadend = (e) => {
      this.files = Array.from(event.target.files);
      this.upload();
    }
    reader.readAsDataURL(fileList.item(0));   
  }

  upload() {
    let file = this.files[0];
    this.arquivos.upload(file)
    .then(
      data => {          
        this.linkAnexo = data;                
        this.classeIcone = 'mostrar';          
      }
    );
  }

  visualizar() {
    window.open(this.linkAnexo,'blank');
  }
  
}
