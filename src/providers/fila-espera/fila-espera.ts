import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FilaEsperaProvider {

  constructor(
    public http: HttpClient
  ) {}

  retornarPacientesFila(){
    return this.http.get('http://localhost:3000/filaEspera/listarPacientesFila').toPromise();
  }

  retornarEstagiariosFila(){
    return this.http.get('http://localhost:3000/filaEspera/listarEstagiariosFila').toPromise();
  }

  retornarAnexosPaciente(paciente){
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/filaEspera/retornarArquivosPacientes', paciente).subscribe(response => {        
        resolve(response);
      });
    });
  }

  gravarAnexos(valores){
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/filaEspera/gravarAnexosPaciente', valores).subscribe(response => {
        resolve(response);
      });
    });
  }

  vincularPacienteEstagiario(valores){
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:3000/filaEspera/vincularPacienteEstagiario', valores).subscribe(response => {
        resolve(response);
      });
    });
  }
}
