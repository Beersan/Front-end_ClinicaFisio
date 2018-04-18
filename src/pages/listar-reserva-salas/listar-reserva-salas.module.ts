import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarReservasPage } from './listar-reserva-salas';

@NgModule({
  declarations: [
    ListarReservasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarReservasPage),
  ],
})
export class ListarReservasPageModule {}
