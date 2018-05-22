import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { usercreds } from '../../models/usercreds';
import { HomePage } from '../home/home';
import { FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  credentials = {} as usercreds;
  validaLogin: any = {};  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider,
    private formBuilder: FormBuilder
  ) {
    this.validaLogin = formBuilder.group ({
      email:['', Validators.required],
      password:['', Validators.required]
    }) 
  }

  signin() {
    this.authProvider.login(this.credentials).then((res: any) => {
      if (!res.code)
        this.navCtrl.setRoot(HomePage);
      else 
        console.log("teste");
    });
  }
}
