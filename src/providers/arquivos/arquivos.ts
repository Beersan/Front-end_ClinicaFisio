import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/storage';

@Injectable()
export class ArquivosProvider {
  upload(arquivo: any) {
    let storageRef = firebase.storage().ref();      
    let uploadTask = storageRef.child(`anexos/${this.guid()}`).put(arquivo);
    return uploadTask.then(
      (snapshot) => {  
        return snapshot.downloadURL;
      }
    );       
  }

  guid() {//função que gera id unico nome do arquivo
    let s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
}
