import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarPacientesAgendadosPage } from './listar-pacientes-agendados';

@NgModule({
  declarations: [
    ListarPacientesAgendadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarPacientesAgendadosPage),
  ],
})
export class ListarPacientesAgendadosPageModule {}
