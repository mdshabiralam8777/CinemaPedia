import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { PaginatorModel } from 'src/app/models/paginator.model';
import { InTheaterService } from 'src/app/servicess/inTheater/in-theater.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-language-movie',
  templateUrl: './language-movie.component.html',
  styleUrls: ['./language-movie.component.css']
})
export class LanguageMovieComponent implements OnInit {

  movie:MovieModel;
  LangBasedMovies: Array<PaginatorModel> = [];

  constructor(private movies:InTheaterService){
  }
  public currentLanguage: string;
  foods: Food[];

  ngOnInit(): void {
    this.foods = [
      { value: 'ar', viewValue: 'Arabic'},
      { value: 'en', viewValue: 'English' },
      { value: 'gu', viewValue: 'Gujarati'},
      { value: 'hi', viewValue: 'Hindi' },
      { value: 'it', viewValue: 'Italian'},
      { value: 'ja', viewValue: 'Japanese' },
      { value: 'ko', viewValue: 'Korean' },
      { value: 'ml', viewValue: 'Malayalam'},
      { value: 'fa', viewValue: 'Persian'},
      { value: 'ru', viewValue: 'Russian' },
      { value: 'ta', viewValue: 'Tamil' },
      { value: 'te', viewValue: 'Telugu' },
      { value: 'tr', viewValue: 'Turkish'},
      { value: 'ur', viewValue: 'Urdu' }
    ];

  }
  onLangSelection(moviesLanguage: string) {
    this.getMoviesLang(moviesLanguage);
    // this.currentLanguage = moviesLanguage;
  }
  getMoviesLang(lang){
    this.movies.getMoviesLang(lang).subscribe((lan:any)=>{
      this.LangBasedMovies=lan.results;
    });
   }

}
