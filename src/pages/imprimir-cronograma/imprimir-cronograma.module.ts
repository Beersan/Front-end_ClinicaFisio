import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImprimirCronogramaPage } from './imprimir-cronograma';

@NgModule({
  declarations: [
    ImprimirCronogramaPage,
  ],
  imports: [
    IonicPageModule.forChild(ImprimirCronogramaPage),
  ],
})
export class ImprimirCronogramaPageModule {}
