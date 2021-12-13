import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url = "https://www.omdbapi.com/?apikey=b22ec629&s=";
  url2 = "&r=json";
  url3 = "&plot=full";
  url4 = "&page=";
  urlMovie = "https://www.omdbapi.com/?apikey=b22ec629&i=";

  constructor(private http: HttpClient) { }

  findMovies(query: string):
    Observable<any> {
      return this.http.get(`${this.url}${encodeURI(query)}${this.url2}`).pipe(map(data => data['Search']));
    
  }

   getMovie(id: string) :
   Observable<any>{
     
    return  this.http.get(`${this.urlMovie}${id}${this.url2}${this.url3}`);
    
  }

}
