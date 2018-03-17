import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarGrupoPage } from './cadastrar-grupo';

@NgModule({
  declarations: [
    CadastrarGrupoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarGrupoPage),
  ],
})
export class CadastrarGrupoPageModule {}
