import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieService } from '../../services/rest/movie-service';
import { MovieInfoPage } from '../movie-info/movie-info';
import { IconsPage } from '../../pages/icons/icons';

import { AboutPage } from '../../pages/about/about';
 
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
 
export class HomePage {
	//Variables
    movies: Array<any>; //Array of movie result
	public name; //Init var on constreuct
	aboutPage = AboutPage; //this.navCtrl.push(AboutPage);
 
    constructor(public navCtrl: NavController, private movieService: MovieService) {
		this.name = "Andrew";
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