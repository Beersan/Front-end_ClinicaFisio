import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreCadastroPage } from './pre-cadastro';
import { BrMaskerModule } from 'brmasker-ionic-3';


@NgModule({
  declarations: [
    PreCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(PreCadastroPage),
    BrMaskerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PreCadastroPageModule {}
