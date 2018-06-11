import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  constructor(
    private authProvider: AuthProvider,
    private alertCtrl: AlertController,
    public navCtrl: NavController    
  ) {}

  sair() {
    let alert = this.alertCtrl.create({
      title: 'Atenção!',
      message: 'Deseja sair do sistema?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel'
        },
        {
          text: 'Sair',
          handler: () => {
            this.authProvider.logout().then((res: any) => {      
              this.navCtrl.setRoot(LoginPage);
            });
          }
        }
      ]
    });
    alert.present();    
  }
}

