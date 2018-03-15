import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';

import { HomePage } from '../pages/home/home';

//import { FCM } from '@ionic-native/fcm';
//$ ionic cordova plugin add cordova-plugin-fcm
//$ npm install --save @ionic-native/fcm

import { Push, PushObject, PushOptions } from '@ionic-native/push';
//ionic plugin add phonegap-plugin-push --variable SENDER_ID=435346741968
//npm install @ionic-native/push --save





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
	  
  
    constructor(public platform: Platform,public menu: MenuController,public statusBar: StatusBar,public splashScreen: SplashScreen, public push: Push, public alertCtrl: AlertController) {
		
		//platform.ready().then(() => {
			statusBar.styleDefault();
			splashScreen.hide();
			this.initializeApp();
		
		//});
		
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
			
			if(this.platform.is('cordova')) {
				const options: PushOptions = {
					 android: {
						 senderID: '435346741968'
					 },
					 ios: {
						 alert: 'true',
						 badge: true,
						 sound: 'false'
					 },
					 windows: {}
				};
				
				
				const pushObject: PushObject = this.push.init(options);
	 
				pushObject.on('notification').subscribe((notification: any) => {
					if (notification.additionalData.foreground) {
					  let youralert = this.alertCtrl.create({
						title: 'New Push notification',
						message: notification.message
					  });
					  youralert.present();
					}
				});
			 
				pushObject.on('registration').subscribe((registration: any) => {
					//do whatever you want with the registration ID
				});
			 
				pushObject.on('error').subscribe(error => alert('Error with Push plugin' + error));
				
			
			}
 
 
 
		    //this.statusBar.styleDefault();
		    //this.splashScreen.hide();
		    // FCM Push
		   // if(this.platform.is('cordova')) {
				//console.log('FFF');
				/*this.fcm.subscribeToTopic('marketing');
			  
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

				this.fcm.unsubscribeFromTopic('marketing');*/
			//}
		
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

