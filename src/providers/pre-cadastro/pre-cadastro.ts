import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { PreCadastro } from '../../models/model.pre-cadastro';

@Injectable()
export class PreCadastroProvider {

  constructor(
    public http: HttpClient,
    public alertCtrl: AlertController
  ) {}

  create(preCadastro: PreCadastro){
    console.log("gravar")
  }

  retornarEspecialidade(){    
    return this.http.get('http://localhost:3000/preCadastro/listarEspecialidade').toPromise();
  }
}
