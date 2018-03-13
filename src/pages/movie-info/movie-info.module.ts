import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieInfoPage } from './movie-info';

@NgModule({
  declarations: [
    MovieInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MovieInfoPage),
  ],
})
export class MovieInfoPageModule {}
