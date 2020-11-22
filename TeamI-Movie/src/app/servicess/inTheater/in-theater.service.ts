import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InTheaterService {

  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = '33ad7fa13dffc97b8ea01b8070ab7300';
    this.language = 'en-US';
    this.region = 'US'
  }

  getNowPlaying(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`)
  }


  getPopular(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`)
  }

  getUpComingMovies(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`)
  }

  getTopRatedMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/top_rated?api_key=${this.apiKey}`)
  }

  getGenres(): Observable<any> {
    return this.http.get(`${this.baseUrl}genre/movie/list?api_key=${this.apiKey}&language=${this.language}`)
  }

  getMoviesByGenre(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}genre/${id}/movies?api_key=${this.apiKey}`)
  }

  getMovie(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`)
  }

  getMovieReviews(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/reviews?api_key=${this.apiKey}`)
  }

  getMovieCredits(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}`)
  }

  getMovieVideos(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/videos?api_key=${this.apiKey}`)
  }

  getRecomendMovies(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}/recommendations?api_key=${this.apiKey}`)
  }

  getPersonDetail(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}person/${id}?api_key=${this.apiKey}`)
  }

  getPersonExternalData(id: string) {
    return this.http.get(`${this.baseUrl}person/${id}/external_ids?api_key=${this.apiKey}`)
  }

  getPersonCast(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}person/${id}/movie_credits?api_key=${this.apiKey}`)
  }

  searchMovies(searchStr:string): Observable<any> {
    searchStr = this.convertToSlug(searchStr);
    return this.http.get(`${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}&page=1`)
  }

  getMoviesLang(lang:string){
    return this.http.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&with_original_language=${lang}&page=1`)
    // https://api.themoviedb.org/3/discover/movie?api_key=33ad7fa13dffc97b8ea01b8070ab7300&with_original_language=ru
  }
  // getMoviesLangHi(){
  //   return this.http.get(`${this.baseUrl}discover/movie?api_key=${this.apiKey}&with_original_language=hi&page=1`)
  //   // https://api.themoviedb.org/3/discover/movie?api_key=33ad7fa13dffc97b8ea01b8070ab7300&with_original_language=ru
  // }
  // getMoviesLangHi
  // search(query:string) {
  //   query = this.convertToSlug(query);
  //   return this.http.get(this.baseUrl + '3/search/movie' + this.apiKey + '&query=' + query );
  // }
  convertToSlug(string) {
    string = string.toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '+')
      .replace(/-+/g, '+');
    return string;
  }

}
