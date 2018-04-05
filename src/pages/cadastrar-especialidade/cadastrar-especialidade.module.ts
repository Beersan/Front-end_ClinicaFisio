import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarEspecialidadePage } from './cadastrar-especialidade';

@NgModule({
  declarations: [
    CadastrarEspecialidadePage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarEspecialidadePage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CadastrarEsoecialidadePageModule { }
