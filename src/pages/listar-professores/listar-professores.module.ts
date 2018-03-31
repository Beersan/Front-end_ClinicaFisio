import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarProfessoresPage } from './listar-professores';

@NgModule({
  declarations: [
    ListarProfessoresPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarProfessoresPage),
  ],
})
export class ListarProfessoresPageModule {}
