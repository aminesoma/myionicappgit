import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieService } from '../../services/rest/movie-service';
import { MovieInfoPage } from '../movie-info/movie-info';
import { IconsPage } from '../../pages/icons/icons';
 
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
 
export class HomePage {
 
    movies: Array<any>;
 
    constructor(public navCtrl: NavController, private movieService: MovieService) {
 
    }
	
	goToIconsPage () {
		this.navCtrl.push(IconsPage);
	}
 
    searchMovieDB(event, key) {
        if(event.target.value.length > 2) {
            this.movieService.searchMovies(event.target.value).subscribe(
                data => {
                    this.movies = data.results; 
                    console.log(data);
                },
                err => {
                    console.log(err);
                },
                () => console.log('Movie Search Complete')
            );
        }
    } 
 
    itemTapped(event, movie) {
        console.log(movie);  
        this.navCtrl.push(MovieInfoPage, {
            movie: movie
        });
    }
}