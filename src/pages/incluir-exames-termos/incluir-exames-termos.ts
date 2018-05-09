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
  files:Array<any>;
  linkAnexo:any = "";
  classeIcone: string = 'ocultar';
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private provider: FilaEsperaProvider,
    private alertCtrl: AlertController,
    private arquivos: ArquivosProvider
  ) {}
  
  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Pré cadastro realizado.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }

  cancelar(){
    this.navCtrl.pop();
  }

  detectarArquivos(event) {
    let fileList: FileList = event.target.files;
    let reader = new FileReader();
    reader.onloadend= (e) => {
      this.files = Array.from(event.target.files);
      this.upload();
    }
    reader.readAsDataURL(fileList.item(0));   
  }

  upload() {
    let file = this.files[0];
      this.arquivos.upload(
        file
    ).then(
      data => {
        this.linkAnexo = data;                
        this.classeIcone = 'mostrar';
      }
    );
  }

  visualizar() {
    this.linkAnexo;
    window.open(this.linkAnexo,'blank');
  }
}
