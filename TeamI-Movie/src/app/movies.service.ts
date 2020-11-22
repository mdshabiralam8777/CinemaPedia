import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http:HttpClient) { 
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '?api_key=33ad7fa13dffc97b8ea01b8070ab7300';
    this.language = 'en-US';
    this.region = 'US'
  }
  // private apiUrl = 'https://api.themoviedb.org/';

  getPoularMovies() {
    // return this.http.get(this.apiUrl + '3/movie/' + 'popular' + this.apiKey+'&language=en-US&page=1');
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=33ad7fa13dffc97b8ea01b8070ab7300&page=1');
  }
  getTopRatedMovies() {
    // return this.http.get(this.apiUrl + '3/movie/' + 'top_rated' + this.apiKey+'&language=en-US&page=1');
    return this.http.get('https://api.themoviedb.org/3/movie/top_rated?api_key=33ad7fa13dffc97b8ea01b8070ab7300&page=2');
  }
  getNowPlaying(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=33ad7fa13dffc97b8ea01b8070ab7300&page=3');

    // return this.http.get(`${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`)
  }
  getTvOnTheAir(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/tv/on_the_air?api_key=33ad7fa13dffc97b8ea01b8070ab7300');
    //return this.http.get(`${this.baseUrl}tv/on_the_air?api_key=${this.apiKey}&page=${page}`);
  }

  getTVAiringToday(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/tv/airing_today?api_key=33ad7fa13dffc97b8ea01b8070ab7300&page=2');
    //return this.http.get(`${this.baseUrl}tv/airing_today?api_key=${this.apiKey}&page=${page}`);
  }

  getPopularTVShow(): Observable<any> {
    return this.http.get('https://api.themoviedb.org/3/tv/popular?api_key=33ad7fa13dffc97b8ea01b8070ab7300&page=1');
    // return this.http.get(`${this.baseUrl}tv/popular?api_key=${this.apiKey}&page=${page}`);
  }

  // search(query:string) {
  //   query = this.convertToSlug(query);
  //   return this.http.get(this.baseUrl + 'search/movie' + this.apiKey + '&query=' + query);
  // }
  searchMovie(searchStr: string): Observable<any> {
    searchStr = this.convertToSlug(searchStr);
    return this.http.get(`https://api.themoviedb.org/3/search/movie?api_key=33ad7fa13dffc97b8ea01b8070ab7300&page=1&include_adult=false&query=`+searchStr);

  }
  // /https://api.themoviedb.org/3/search/movie?api_key=33ad7fa13dffc97b8ea01b8070ab7300&page=1&include_adult=false&query=one%20piece

  convertToSlug(string:string) {
    string = string.toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '+')
      .replace(/-+/g, '+');
    return string;
  }
}

 