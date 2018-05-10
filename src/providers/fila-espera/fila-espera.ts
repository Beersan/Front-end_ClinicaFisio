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

  gravarAnexos(valores){
  //   return new Promise((resolve, reject) => {
  //     this.http.post('http://localhost:3000/filaEspera/gravarAnexos', valores).subscribe(response => {
  //       resolve(response);
  //     });
  //   });
  }

  vincularPacienteEstagiario(){
    
  }
}
