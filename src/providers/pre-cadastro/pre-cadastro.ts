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

  gravar(preCadastro: PreCadastro){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/preCadastro/gravar', preCadastro).subscribe(response => {
        resolve(response);
      });
    });
  }

  retornarEspecialidade(){    
    return this.http.get('https://backfisio.herokuapp.com/preCadastro/listarEspecialidade').toPromise();
  }

  retornarPacientes(){
    return this.http.get('https://backfisio.herokuapp.com/preCadastro/listarPacientes').toPromise();
  }

  excluirPaciente(idPaciente){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/preCadastro/excluir', idPaciente).subscribe(response => {
        resolve(response);
      });      
    });
  }

  aprovarCadastro(dadosPaciente){    
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/preCadastro/aprovarCadastro', dadosPaciente).subscribe(response => {
        resolve(response);
      });
    });
  }  
}
