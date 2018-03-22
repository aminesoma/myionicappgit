import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { InfoUserPage } from '../info-user/info-user';
import { MovieService } from '../../services/rest/movie-service';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
	
	

	data: any;
    users: string[];
    errorMessage: string;
    page = 1;
    perPage = 0;
    totalData = 0;
    totalPage = 0;

    constructor(public navCtrl: NavController, public navParams: NavParams,private movieService: MovieService) {
	  this.getUsers();
    }
  
    getUsers() {
		this.movieService.getUsers(this.page)
		 .subscribe(
		   res => {
			 this.data = res;
			 this.users = this.data.data;
			 this.perPage = this.data.per_page;
			 this.totalData = this.data.total;
			 this.totalPage = this.data.total_pages;
		   },
		   error =>  this.errorMessage = <any>error);
	}

	doInfinite(infiniteScroll) {
	  this.page = this.page+1;
	  setTimeout(() => {
		this.movieService.getUsers(this.page)
		   .subscribe(
			 res => {
			   this.data = res;
			   this.perPage = this.data.per_page;
			   this.totalData = this.data.total;
			   this.totalPage = this.data.total_pages;
			   for(let i=0; i<this.data.data.length; i++) {
				 this.users.push(this.data.data[i]);
			   }
			 },
			 error =>  this.errorMessage = <any>error);

		console.log('Async operation has ended');
		infiniteScroll.complete();
	  }, 1000);
	}
	
	itemTapped(event, user) {
        console.log(user);  
        this.navCtrl.push(InfoUserPage, {
            user: user
        });
    }

    ionViewDidLoad() {
		console.log('ionViewDidLoad UsersPage');
    }

}
