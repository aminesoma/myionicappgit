import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MovieInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie-info',
  templateUrl: 'movie-info.html',
})
export class MovieInfoPage {
  
  movie: {};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
	   this.movie = navParams.get('movie');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MovieInfoPage');
  }

}



