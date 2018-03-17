import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarEspecialidadePage } from './cadastrar-especialidade';

@NgModule({
  declarations: [
    CadastrarEspecialidadePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarEspecialidadePage),
  ],
})
export class CadastrarEspecialidadePageModule {}
