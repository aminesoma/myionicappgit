import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

//Infinity scroll
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';



@Injectable()
export class MovieService {
	private apiUrl = 'https://reqres.in/api/';
	//private apiUrl = 'http://api.themoviedb.org/3';
    
	constructor(private http:Http) {

    }

    searchMovies(movieName) {
        var url = 'http://api.themoviedb.org/3/search/movie?query=&query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        var response = this.http.get(url).map(res => res.json());
        return response;
    } 


	bringMovies() {
        var url = 'http://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
        var response = this.http.get(url).map(res => res.json());
        return response;
    } 
	
	
	//****** Infinite Scroll *******//
	getUsers(page): Observable<string[]> {
	  return this.http.get(this.apiUrl+"users?page="+page)
					  .map(this.extractData)
					  .catch(this.handleError);
	}
	//Add function for extract data.
	private extractData(res: Response) {
	  let body = res.json();
	  return body || { };
	}
	
	//Add function to handle the error.
	private handleError (error: Response | any) {
	  let errMsg: string;
	  if (error instanceof Response) {
		const body = error.json() || '';
		const err = body.error || JSON.stringify(body);
		errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	  } else {
		errMsg = error.message ? error.message : error.toString();
	  }
	  console.error(errMsg);
	  return Observable.throw(errMsg);
	}
	
	
}