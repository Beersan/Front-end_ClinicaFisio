import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RelatarProblemaProvider } from '../../providers/problema/problema';

/**
 * Generated class for the EvolucaoDiariaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evolucao-diaria',
  templateUrl: 'evolucao-diaria.html',
})
export class EvolucaoDiariaPage {
  evolucaoDiaria: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public provider: RelatarProblemaProvider
  ) {
  {
  this.evolucaoDiaria = formBuilder.group ({
    descricaoEvolucao:['', Validators.required]
  })
}
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad EvolucaoDiariaPage');
  }
  
  cancelar(){
    this.navCtrl.pop();
  }
}
