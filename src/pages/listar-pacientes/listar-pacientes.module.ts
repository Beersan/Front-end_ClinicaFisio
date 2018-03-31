import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarPacientesPage } from './listar-pacientes';

@NgModule({
  declarations: [
    ListarPacientesPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarPacientesPage),
  ],
})
export class ListarPacientesPageModule {}
