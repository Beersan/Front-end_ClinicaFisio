import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarEspecialidadePage } from './listar-especialidade';

@NgModule({
  declarations: [
    ListarEspecialidadePage,
  ],
  imports: [
    IonicPageModule.forChild(ListarEspecialidadePage),
  ],
})
export class ListarEspecialidadePageModule {}
