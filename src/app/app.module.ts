import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

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
 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IconsPage,
    MovieInfoPage,
	AboutPage
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
	AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MovieService,
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

