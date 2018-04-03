import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarGrupoEstagiariosPage } from './listar-grupo-estagiarios';

@NgModule({
  declarations: [
    ListarGrupoEstagiariosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarGrupoEstagiariosPage),
  ],
})
export class ListarGrupoEstagiariosPageModule {}
