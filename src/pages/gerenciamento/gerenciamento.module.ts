import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GerenciamentoPage } from './gerenciamento';

@NgModule({
  declarations: [
    GerenciamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(GerenciamentoPage),
  ],
})
export class GerenciamentoPageModule {}
