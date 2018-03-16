import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



import { MovieInfoPage } from '../movie-info/movie-info';
import { MovieService } from '../../services/rest/movie-service';

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
	
	
	constructor( public navCtrl: NavController,private movieService: MovieService, public navParams: NavParams) {
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
        this.navCtrl.push(MovieInfoPage, {
            movie: movie
        });
    }

}
