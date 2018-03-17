import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservarSalaPage } from './reservar-sala';

@NgModule({
  declarations: [
    ReservarSalaPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservarSalaPage),
  ],
})
export class ReservarSalaPageModule {}
