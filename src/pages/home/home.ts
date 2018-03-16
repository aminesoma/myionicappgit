import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, ModalController } from 'ionic-angular';
//Toasts are short messages that appear usually near the bottom of the screen
						
//import {Camera} from 'ionic-native'; //Using the Camera with Ionic Native
//import { Camera } from '@ionic-native/camera';

//import { Camera, CameraOptions } from '@ionic-native/camera';
import { Camera, CameraOptions, CameraPopoverOptions } from '@ionic-native/camera';
//$ ionic cordova plugin add cordova-plugin-camera
//$ npm install --save @ionic-native/camera


//import { SocialSharing } from 'ionic-native';
import { SocialSharing } from '@ionic-native/social-sharing';
//ionic plugin add cordova-plugin-x-socialsharing
//npm install --save @ionic-native/social-sharing



import { MovieService } from '../../services/rest/movie-service';

import { MovieInfoPage } from '../movie-info/movie-info';
import { IconsPage } from '../../pages/icons/icons';
import { AboutPage } from '../../pages/about/about';

import { ListFilmPage } from '../list-film/list-film';
 
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

    constructor(public navCtrl: NavController, private movieService: MovieService, private camera: Camera, public loading: LoadingController, public toastCtrl: ToastController,private socialSharing: SocialSharing, public modalCtrl: ModalController) {
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
	
	openModal() {
		let myModal = this.modalCtrl.create(AboutPage);
		myModal.present();
	}
	
	
	shareInfo(){
		
		/*SocialSharing.shareWithOptions({
			message: `${this.title} - ${this.description}: ${this.recipeUrl}`
		  }).then(() => {
			console.log('Shared!');
		  }).catch((err) => {
			console.log('Oops, something went wrong:', err);
		});*/
  
		this.socialSharing.share("demo message", "Demo subject", "", "https://ampersandacademy.com").
		then(() => {
			console.log("Sharing success");
			// Success!
		}).catch(() => {
			// Error!
			console.log("Share failed");
		});
	}
	
	



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
	
	goToListFilmPage () {
		this.navCtrl.push(ListFilmPage);
	}
 
    searchMovieDB(event, key) {
		//Loader when searching search result
		let loader = this.loading.create({
			content: 'Getting latest entries...',
		});
		
		//search when more than 2 caractere
        if(event.target.value.length > 2) {
			
			loader.present().then(() => { //Loader when searching search result
				this.movieService.searchMovies(event.target.value).subscribe(
					data => {
						this.movies = data.results; 
						console.log(data);
						
						//Toasts are short messages that appear usually near the bottom of the screen
						//this.favorite = true;
						let toast = this.toastCtrl.create({
							message: 'Wow founded!!!',
							position:'middle',
							duration: 2000
						});
						toast.present();
  
					},
					err => {
						console.log(err);
					},
					() => console.log('Movie Search Complete')
				);
				loader.dismiss();
			});
        }
    } 
 
    itemTapped(event, movie) {
        console.log(movie);  
        this.navCtrl.push(MovieInfoPage, {
            movie: movie
        });
    }
}