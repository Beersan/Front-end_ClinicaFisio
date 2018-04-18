import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarHorarioProfessorPage } from './cadastrar-horario-professor';

@NgModule({
  declarations: [
    CadastrarHorarioProfessorPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarHorarioProfessorPage),
  ],
})
export class CadastrarHorarioProfessorPageModule {}
