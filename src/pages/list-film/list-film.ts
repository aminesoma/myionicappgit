import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { MovieInfoPage } from '../movie-info/movie-info';
import { MovieService } from '../../services/rest/movie-service';

//ionic cordova plugin add com.telerik.plugins.nativepagetransitions
//npm install --save @ionic-native/native-page-transitions
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

/**
 * Generated class for the ListFilmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-film',
  templateUrl: 'list-film.html',
})
export class ListFilmPage {

    movies: Array<any>; //Array of movie result
  
    data: any;
    users: string[];
    errorMessage: string;
    page = 1;
    perPage = 0;
    totalData = 0;
    totalPage = 0;
	
	
	constructor( public navCtrl: NavController,private movieService: MovieService, public navParams: NavParams,private nativePageTransitions: NativePageTransitions) {
		//this.name = "Andrew";
		this.bringMovieDB();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListFilmPage');
  }
  
  
  bringMovieDB() {
		
		this.movieService.bringMovies().subscribe(
			data => {
				this.movies = data.results; 
				console.log(data);
				
				

			},
			err => {
				console.log(err);
			},
			() => console.log('Movie Bring Complete')
		);
				
		
    } 
	
	
	
	itemTapped(event, movie) {
        console.log(movie);  
		
		
		let options: NativeTransitionOptions = {
		  direction: 'up',
		  duration: 600
		};
	 
		this.nativePageTransitions.flip(options);
		//this.navCtrl.push('SecondPage');
        this.navCtrl.push(MovieInfoPage, {
            movie: movie
        });
    }

}
