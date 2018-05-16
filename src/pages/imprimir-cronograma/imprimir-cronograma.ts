import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImprimirCronogramaProvider } from '../../providers/imprimir-cronograma/imprimir-cronograma';
import { ImprimirCronograma } from './../../models/model.imprimir-cronograma';
import { updateDate } from 'ionic-angular/util/datetime-util';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-imprimir-cronograma',
  templateUrl: 'imprimir-cronograma.html',
})

export class ImprimirCronogramaPage {
  imprimirCronograma: any = {};
  cronogramas: any;
  semestres: any;
  grupos: any;
  horarios: any;
  estagiarios: any;
  especialidades: any;
  professores: any;
  //etapas: any;

  cronogramasSemFiltro: any;
  resultado: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private provider: ImprimirCronogramaProvider,
    private alertCtrl: AlertController
  ) {}

  ionViewWillEnter(){
    this.listarCronograma();
  }


  filtrarItens(searchbar) {
  
    this.cronogramas = this.cronogramasSemFiltro;

    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;
  
  
    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
  
    this.cronogramas = this.cronogramas.filter((v) => {
    /*  if(v.matriculaestagiario && v.nomeestagiario && q) {
        if (
          v.nomeestagiario.toLowerCase().indexOf(q.toLowerCase()) > -1
          ||
          v.matriculaestagiario.toLowerCase().indexOf(q.toLowerCase()) > -1
        ) {
          return true;
        }
          return false;
      }*/
    });
    console.log(q, this.cronogramas.length);
  }

  listarCronograma(){
    this.provider.retornarCronograma().then(
      data => {
        this.cronogramas = data;
        this.cronogramasSemFiltro = this.cronogramas;
        console.log(data);
      }
    )
    .catch(error => alert(error));
  }
}
