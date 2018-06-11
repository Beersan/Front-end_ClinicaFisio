import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FilaEsperaProvider {

  constructor(
    public http: HttpClient
  ) {}

  retornarPacientesFila(){
    return this.http.get('https://backfisio.herokuapp.com/filaEspera/listarPacientesFila').toPromise();
  }

  retornarEstagiariosFila(){
    return this.http.get('https://backfisio.herokuapp.com/filaEspera/listarEstagiariosFila').toPromise();
  }

  retornarAnexosPaciente(paciente){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/filaEspera/retornarArquivosPacientes', paciente).subscribe(response => {        
        resolve(response);
      });
    });
  }

  gravarAnexos(valores){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/filaEspera/gravarAnexosPaciente', valores).subscribe(response => {
        resolve(response);
      });
    });
  }

  vincularPacienteEstagiario(valores){
    return new Promise((resolve, reject) => {
      this.http.post('https://backfisio.herokuapp.com/filaEspera/vincularPacienteEstagiario', valores).subscribe(response => {
        resolve(response);
      });
    });
  }
}
