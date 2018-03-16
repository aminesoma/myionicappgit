import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListFilmPage } from './list-film';

@NgModule({
  declarations: [
    ListFilmPage,
  ],
  imports: [
    IonicPageModule.forChild(ListFilmPage),
  ],
})
export class ListFilmPageModule {}
