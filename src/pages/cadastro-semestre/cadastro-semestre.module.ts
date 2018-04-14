import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroSemestrePage } from './cadastro-semestre';

@NgModule({
  declarations: [
    CadastroSemestrePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroSemestrePage),
  ],
})
export class CadastroSemestrePageModule {}
