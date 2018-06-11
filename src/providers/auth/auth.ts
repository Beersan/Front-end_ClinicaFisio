import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { usercreds } from '../../models/usercreds';
import { AlertController} from 'ionic-angular';

@Injectable()
export class AuthProvider {

  constructor(
    public http: HttpClient,
    public afireauth: AngularFireAuth,
    private alertCtrl: AlertController    
  ) {}

  login(credentials: usercreds) {
    var promise = new Promise((resolve, reject) => {      
      this.afireauth.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(res => {
        resolve(true);        
      }, err => { 
        let alert = this.alertCtrl.create({
          title: 'Atenção!',
          subTitle: "Email ou senha incorretos.",
          buttons: ['Ok']
        });
        alert.present();
      });

    })
    return promise;    
  }

  logout(){
    var promise = new Promise((resolve, reject) => {          
      this.afireauth.auth.signOut().then(res => {
        resolve(true);
      });
    });
    return promise;
  }
}
