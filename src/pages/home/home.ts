import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import {Camera} from 'ionic-native'; //Using the Camera with Ionic Native
//import { Camera } from '@ionic-native/camera';

//import { Camera, CameraOptions } from '@ionic-native/camera';
import { Camera, CameraOptions, CameraPopoverOptions } from '@ionic-native/camera';



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
	
	 public base64Image: string; //Using the Camera with Ionic Native

    constructor(public navCtrl: NavController, private movieService: MovieService, private camera: Camera) {
		this.name = "Andrew";
    }
	
	 options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  popover: CameraPopoverOptions = {
    x: 20,
    y: 60,
    width: 200,
    height: 100,
    arrowDir: 1
  }
	
	
	/*var options: CameraOptions = {
	  quality: 100,
	  destinationType: this.camera.DestinationType.DATA_URL,
	  encodingType: this.camera.EncodingType.JPEG,
	  mediaType: this.camera.MediaType.PICTURE
	}*/



	takePicture(){
		
		
		this.camera.getPicture(this.options).then((imageData) => {
		   this.base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
		   console.log(err);
		});
		
		/*this.camera.getPicture(options).then((imageData) => {
		 // imageData is either a base64 encoded string or a file URI
		 // If it's base64:
		 this.base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
		 // Handle error
		});*/


		/*if (Camera['installed']()) {
			
			this.camera.getPicture({
			//Camera.getPicture({
				destinationType: Camera.DestinationType.DATA_URL,
				targetWidth: 1000,
				targetHeight: 1000
			}).then((imageData) => {
			  // imageData is a base64 encoded string
				this.base64Image = "data:image/jpeg;base64," + imageData;
			}, (err) => {
				console.log(err);
			});
		}*/
		console.log('Camera');
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