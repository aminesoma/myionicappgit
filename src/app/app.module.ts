import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Camera } from '@ionic-native/camera';
//$ ionic cordova plugin add cordova-plugin-camera
//$ npm install --save @ionic-native/camera

//import { FCM } from '@ionic-native/fcm';
//$ ionic cordova plugin add cordova-plugin-fcm
//$ npm install --save @ionic-native/fcm

/*import { HttpClientModule } from '@angular/common/http'; */
import { HttpModule } from '@angular/http';
//import { Http ,HttpModule} from '@angular/http';


import { SocialSharing } from '@ionic-native/social-sharing';
//ionic plugin add cordova-plugin-x-socialsharing
//npm install --save @ionic-native/social-sharing


import { Push, PushObject, PushOptions } from '@ionic-native/push';
//ionic plugin add phonegap-plugin-push --variable SENDER_ID=435346741968
//npm install @ionic-native/push --save

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IconsPage } from '../pages/icons/icons';
import { AboutPage } from '../pages/about/about';
import { InfoUserPage } from '../pages/info-user/info-user';

import { MovieInfoPage } from '../pages/movie-info/movie-info';

import { ListFilmPage } from '../pages/list-film/list-film';

import { MovieService } from '../services/rest/movie-service';


import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';

//ionic cordova plugin add com.telerik.plugins.nativepagetransitions
//npm install --save @ionic-native/native-page-transitions

import { NativePageTransitions } from '@ionic-native/native-page-transitions';
 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IconsPage,
    MovieInfoPage,
	AboutPage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
	ListFilmPage,
	InfoUserPage
  ],
  imports: [
    BrowserModule,
	HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IconsPage,
    MovieInfoPage,
	AboutPage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
	ListFilmPage,
	InfoUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MovieService,
	Camera,
	Push,
	//FCM,
	NativePageTransitions,
	SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
  /*
  providers: [
	AuthGuard,
	CookieService,
	CompanyService,
	PolicyService,
	CommunicationService,
	AuthenticationService,
  
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]*/
})
export class AppModule {}

