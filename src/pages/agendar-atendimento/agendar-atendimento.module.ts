import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendarAtendimentoPage } from './agendar-atendimento';

@NgModule({
  declarations: [
    AgendarAtendimentoPage,
  ],
  imports: [
    IonicPageModule.forChild(AgendarAtendimentoPage),
  ],
})
export class AgendarAtendimentoPageModule {}
