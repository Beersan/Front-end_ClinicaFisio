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
  classeIcone: string = 'ocultar';
  paciente: any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provider: FilaEsperaProvider,
    private alertCtrl: AlertController,
    private arquivos: ArquivosProvider
  ) {
    if (this.navParams.data.idPaciente) {      
      this.paciente = this.navParams.data.idPaciente;
    }
    this.listarAnexos();
  }

  listarAnexos(){
    console.log(this.paciente);    
    this.provider.retornarAnexosPaciente({
        idpaciente: this.paciente
      }).then(
      data => {
        console.log(data);
        
        //this.linkAnexos.push(data);           
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
      anexos: this.linkAnexos,
      idpaciente: this.paciente
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
        this.linkAnexos.push(data);   
      }
    );
  }

  visualizar(valor) {
    window.open(valor,'blank');
  }

  removerAnexo(index){
    this.linkAnexos.splice(index,1);
  }
}
