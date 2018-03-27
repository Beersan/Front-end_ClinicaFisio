import { NgModule, CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastrarEstagiarioPage } from './cadastrar-estagiario';
import { BrMaskerModule } from 'brmasker-ionic-3';


@NgModule({
  declarations: [
    CadastrarEstagiarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastrarEstagiarioPage),
    BrMaskerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CadastrarEstagiarioPageModule { }
