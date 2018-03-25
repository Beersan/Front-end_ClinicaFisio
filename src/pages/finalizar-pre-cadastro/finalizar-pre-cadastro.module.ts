import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FinalizarPreCadastroPage } from './finalizar-pre-cadastro';
import { BrMaskerModule } from 'brmasker-ionic-3';



@NgModule({
  declarations: [
    FinalizarPreCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(FinalizarPreCadastroPage),
    BrMaskerModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class FinalizarPreCadastroPageModule {}
