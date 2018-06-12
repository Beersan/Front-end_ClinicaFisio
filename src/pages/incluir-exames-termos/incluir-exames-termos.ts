import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FilaEsperaProvider } from '../../providers/fila-espera/fila-espera';
import { ArquivosProvider } from '../../providers/arquivos/arquivos';

@IonicPage()
@Component({
  selector: 'page-incluir-exames-termos',
  templateUrl: 'incluir-exames-termos.html',
})
export class IncluirExamesTermosPage {
  files: Array<any>;
  linkAnexos: any = [];
  arquivoSalvo: any = [];
  classeImagem: string = 'ocultar';
  classeConc: string = 'ocultar';
  dadosPaciente: any;
  fileDireitoImagem: any;
  linkAnexoImagem:any;
  linkAnexoConc:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provider: FilaEsperaProvider,
    private alertCtrl: AlertController,
    private arquivos: ArquivosProvider
  ) {
    if (this.navParams.data.paciente) {      
      this.dadosPaciente = JSON.parse(JSON.stringify(this.navParams.data.paciente)); 
      if (this.dadosPaciente.termoimagem != null && this.dadosPaciente.termoimagem != ""){
        this.linkAnexoImagem = this.dadosPaciente.termoimagem;     
        this.classeImagem = 'mostrar';            
      }
      if (this.dadosPaciente.termoconcordancia != null && this.dadosPaciente.termoconcordancia != ""){
        this.linkAnexoConc = this.dadosPaciente.termoconcordancia;     
        this.classeConc = 'mostrar';
      }
    }
    this.listarAnexos();
  }

  listarAnexos(){    
    this.provider.retornarAnexosPaciente({
        idpaciente: this.dadosPaciente.idpaciente
      }).then(
      data => {
        this.arquivoSalvo = data;
        for(let line of this.arquivoSalvo){
          this.linkAnexos.push(line.arquivo);
        }        
      }
    )
    .catch(error => alert(error));
  }
  
  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Exames e anexos vinculados.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }

  gravarAnexos(){    
    this.provider.gravarAnexos({
      anexoImagem: this.linkAnexoImagem,
      anexoConc: this.linkAnexoConc,
      anexos: this.linkAnexos,
      idpaciente: this.dadosPaciente.idpaciente
    }).then((result) => {
      this.showAlert();
    });  
  }

  cancelar(){
    this.navCtrl.pop();
  }

  detectarArquivos(event,tipo) {
    let fileList: FileList = event.target.files;
    let reader = new FileReader();
    reader.onloadend = (e) => {
      this.files = Array.from(event.target.files);
      this.upload(tipo);
    }
    reader.readAsDataURL(fileList.item(0));   
  }

  upload(tipo) {
    let file = this.files[0];
    this.arquivos.upload(file)
    .then(
      data => {
        switch(tipo){
          case 1: // Anexos
            this.linkAnexos.push(data);   
            break;
          case 2: // Imagem
            this.linkAnexoImagem = data;                
            this.classeImagem = 'mostrar';
            break;
          case 3:
            this.linkAnexoConc = data;                
            this.classeConc = 'mostrar';
            break;            
        }
      }
    );
  }

  visualizar(valor) {
    if (valor == 2){
      valor = this.linkAnexoImagem;
    } else if(valor == 3){
      valor = this.linkAnexoConc;
    }
    window.open(valor,'blank');
  }

  removerAnexo(index){
    this.linkAnexos.splice(index,1);
  }
}
