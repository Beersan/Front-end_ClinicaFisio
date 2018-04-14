import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarSemestrePage } from './listar-semestre';

@NgModule({
  declarations: [
    ListarSemestrePage,
  ],
  imports: [
    IonicPageModule.forChild(ListarSemestrePage),
  ],
})
export class ListarSemestrePageModule {}
