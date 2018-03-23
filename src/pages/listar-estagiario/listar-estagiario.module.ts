import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarEstagiarioPage } from './listar-estagiario';

@NgModule({
  declarations: [
    ListarEstagiarioPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarEstagiarioPage),
  ],
})
export class ListarEstagiarioPageModule {}
