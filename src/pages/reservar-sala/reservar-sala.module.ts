import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservarSalaPage } from './reservar-sala';
//import { MomentModule } from 'angular2-moment/moment.module';

@NgModule({
  declarations: [
    ReservarSalaPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservarSalaPage),
  ],
})
export class ReservarSalaPageModule {}
