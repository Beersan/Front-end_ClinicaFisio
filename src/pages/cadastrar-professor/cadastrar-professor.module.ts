import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarProfessorPage } from './cadastrar-professor';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    CadastrarProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarProfessorPage),
    BrMaskerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CadastrarProfessorPageModule {}
