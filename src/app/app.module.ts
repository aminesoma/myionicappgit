import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Camera } from '@ionic-native/camera';

import { HttpClientModule } from '@angular/common/http'; 
/*import { HttpModule } from '@angular/http';*/
import { Http ,HttpModule} from '@angular/http';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IconsPage } from '../pages/icons/icons';
import { AboutPage } from '../pages/about/about';

import { MovieInfoPage } from '../pages/movie-info/movie-info';
import { MovieService } from '../services/rest/movie-service';


import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IconsPage,
    MovieInfoPage,
	AboutPage,
    UsersPage,
    ReposPage,
    OrganisationsPage
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
    OrganisationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MovieService,
	Camera,
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

