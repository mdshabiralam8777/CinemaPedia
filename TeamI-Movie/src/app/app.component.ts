import { Component } from '@angular/core';
// import { PaginatorModel } from './models/paginator.model';
// import { InTheaterService } from './servicess/inTheater/in-theater.service';

// interface Food {
//   value: string;
//   viewValue: string;
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TeamI-Movie';
//   LangBasedMovies: Array<PaginatorModel> = [];
//   language:string;
//   constructor(private movies:InTheaterService){
//   }

  // foods: Food[] = [
  //   {value: 'en', viewValue: 'English'},
  //   {value: 'hi', viewValue: 'Hindi'},
  //   {value: 'Ta', viewValue: 'Tamil'},
  //   {value: 'Te', viewValue: 'Telugu'},
  //   {value: 'ko', viewValue: 'Korean'},
  //   {value: 'ur', viewValue: 'Urdu'},
  //   {value: 'ru', viewValue: 'Russian'},
  //   {value: 'ja', viewValue: 'Japanese'},
  // ];

//   modo(value: string){
//     switch(value) {
//       case "en":
//         this.movies.getMoviesLangEn().subscribe((lang:any)=>{
//           this.LangBasedMovies=lang.results;
//         });
//          break;
//       case "hi":
//         this.movies.getMoviesLangHi().subscribe((lang:any)=>{
//           this.LangBasedMovies=lang.results;
//         });
//          break;
//       case "mod3":
//          // if modo 3 is selected do something.
//          break;
//     }
//   }
//   ngOnInit(): void {
//     this.movies.getMoviesLang(this.language).subscribe((lang:any)=>{
//       this.LangBasedMovies=lang.results;
//     });
//   }
// }
}

// https://api.themoviedb.org/3/discover/movie?api_key=33ad7fa13dffc97b8ea01b8070ab7300&with_original_language=ru