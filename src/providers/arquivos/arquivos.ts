import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable()
export class ArquivosProvider {
  upload(arquivo: any) {
    let storageRef = firebase.storage().ref();      
    let uploadTask = storageRef.child(`${this.guid(arquivo)}`).put(arquivo);
    return uploadTask.then(
      (snapshot) => {  
        return snapshot.downloadURL;
      }
    );       
  }

  guid(arquivo) {//função que gera id unico nome do arquivo          
    var re = /(?:\.([^.]+))?$/;
    console.log(arquivo.name);
    var ext = re.exec(arquivo.name)[1];
    console.log(ext);
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4() + "." + ext;
  }
}
