import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnTVService {

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

  getTvOnTheAir(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/on_the_air?api_key=${this.apiKey}&page=${page}&language=${this.language}`)
  }

  getTVAiringToday(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/airing_today?api_key=${this.apiKey}&page=${page}&language=${this.language}`)
  }

  getPopularTVShow(page: number): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}`)
  }

  getTVShow(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/${id}?api_key=${this.apiKey}&language=${this.language}`)
  }

  getGenres(): Observable<any> {
    return this.http.get(`${this.baseUrl}genre/tv/list?api_key=${this.apiKey}&language=${this.language}`)
  }

  getTVShowByGenre(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}discover/tv?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false`);
  }
  getShowCredits(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/${id}/credits?api_key=${this.apiKey}`)
  }
  getShowVideo(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/${id}/videos?api_key=${this.apiKey}`)
  }
  getRecomendShow(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}tv/${id}/recommendations?api_key=${this.apiKey}`)
  }
  getShow(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}movie/${id}?api_key=${this.apiKey}`)
  }
}
