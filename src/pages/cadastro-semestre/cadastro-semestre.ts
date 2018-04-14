import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SemestreProvider } from '../../providers/semestre/semestre';

@IonicPage()
@Component({
  selector: 'page-cadastro-semestre',
  templateUrl: 'cadastro-semestre.html',
})
export class CadastroSemestrePage {
  nomeSemestre: string;
  dataInicioSemestre: Date;
  dataFimSemestre: Date;
  idSemestre = "";
  semestres: any[];

  constructor(
    public navCtrl: NavController, 
    private provider: SemestreProvider,
    private alertCtrl: AlertController,
    public navParams: NavParams
  ) {
    if (this.navParams.data.semestre) {      
      this.semestres = this.navParams.data.semestre;
      var text = JSON.stringify(this.semestres);
      var obj = JSON.parse(text);
      this.nomeSemestre = obj.nomesemestre;
      this.dataInicioSemestre = obj.datainiciosemestre;
      this.dataFimSemestre = obj.datafimsemestre;
      this.idSemestre = obj.idsemestre;
    }
  }

  cadastrarSemestre(){
    if (this.dataValida()){
      this.provider.create({
        nomeSemestre: this.nomeSemestre, 
        dataInicioSemestre: this.dataInicioSemestre,
        dataFimSemestre: this.dataFimSemestre,
        idSemestre: this.idSemestre
      }).then((result) => {
        this.showAlert();    
      });        
    }
  }
  
  showAlert(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Semestre gravado.',
      buttons: ['Ok']
    });
    alert.present();
    this.navCtrl.pop();
  }

  cancelar(){
    this.navCtrl.pop();
  }

  dataValida(){
    var valido = true;
    if (this.dataInicioSemestre > this.dataFimSemestre){
      valido = false;
      let alert = this.alertCtrl.create({
        title: 'Atenção!',
        subTitle: 'A data inicial não pode ser maior que a data final.',
        buttons: ['Ok']
      });
      alert.present();
    }
    return valido;
  }
}
