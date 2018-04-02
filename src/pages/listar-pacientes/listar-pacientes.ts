import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PreCadastroProvider } from '../../providers/pre-cadastro/pre-cadastro';

@IonicPage()
@Component({
  selector: 'page-listar-pacientes',
  templateUrl: 'listar-pacientes.html',
})
export class ListarPacientesPage {
  pacientes: any;

  constructor(
      public navCtrl: NavController, 
      public navParams: NavParams,
      private provider: PreCadastroProvider
  ) {}

  ionViewWillEnter(){
    this.listarPaciantes();
  }

  listarPaciantes(){
    // this.provider.retornarPacientes().then(
    //   data => {
    //     this.pacientes = data;
    //     console.log(data);
    //   }
    // )
    // .catch(error => alert(error));
  }

}
