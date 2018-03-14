import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';

import { HomePage } from '../pages/home/home';

import { FCM } from '@ionic-native/fcm';
//$ ionic cordova plugin add cordova-plugin-fcm
//$ npm install --save @ionic-native/fcm






@Component({
  templateUrl: 'app.html'
})
export class MyApp {
	
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  
  
  
  //FCM Send Notification
  //@ViewChild('myNav') navCtrl: NavController;
  //rootPage:string;
  
  pages: Array<{title: string, component: any}>;

    //constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, menu: MenuController) {
	  
    constructor(public platform: Platform,public menu: MenuController,public statusBar: StatusBar,public splashScreen: SplashScreen,public fcm: FCM) {
		this.initializeApp();
		
		// set our app's pages
		this.pages = [
		  { title: 'Users', component: UsersPage },
		  { title: 'Repos', component: ReposPage },
		  { title: 'Organisations', component: OrganisationsPage },      
		];
		
	}
	
	
	initializeApp() {
		this.platform.ready().then(() => {
		    // Okay, so the platform is ready and our plugins are available.
		    // Here you can do any higher level native things you might need.
		    this.statusBar.styleDefault();
		    this.splashScreen.hide();
		  
		    // FCM Push
		    if (this.platform.is('cordova')) {
				this.fcm.subscribeToTopic('marketing');
			  
				this.fcm.getToken().then(token => {
					  // Your best bet is to here store the token on the user's profile on the
					  // Firebase database, so that when you want to send notifications to this 
					  // specific user you can do it from Cloud Functions.
						//backend.registerToken(token);
				});
					
					
				this.fcm.onNotification().subscribe(data => {
					  if (data.wasTapped) {
						//Notification was received on device tray and tapped by the user.
						console.log(JSON.stringify(data));
						//this.navCtrl.setRoot('DetailPage', { profileId: data.profileId });
					} else {
						//Notification was received in foreground. Maybe the user needs to be notified.
						console.log(JSON.stringify(data));
						//this.navCtrl.push('DetailPage', { profileId: data.profileId });
					}
				
				
				});
				
				this.fcm.onTokenRefresh().subscribe(token=>{
				  //backend.registerToken(token);
				});

				this.fcm.unsubscribeFromTopic('marketing');
			}
		
		});
	}
	
	
  
	/*platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });*/
	
	openPage(page) {
		// close the menu when clicking a link from the menu
		this.menu.close();
		// navigate to the new page if it is not the current page
		this.nav.setRoot(page.component);
    }
  
  
    //openPage(page) {
    // close the menu when clicking a link from the menu
    //this.menu.close();
    // navigate to the new page if it is not the current page
    //this.nav.setRoot(page.component);
	//console.log('SetRoot');
    //}
}

