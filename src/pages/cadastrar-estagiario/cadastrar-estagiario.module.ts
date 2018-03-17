import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarEstagiarioPage } from './cadastrar-estagiario';

@NgModule({
  declarations: [
    CadastrarEstagiarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarEstagiarioPage),
  ],
})
export class CadastrarEstagiarioPageModule {}
