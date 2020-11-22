import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { MoviesService } from '../movies.service';
import { NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { MovieModel } from '../models/movie.model';
import { ActivatedRoute } from '@angular/router';
import { InTheaterService } from '../servicess/inTheater/in-theater.service';
import { PaginatorModel } from '../models/paginator.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private readonly movieService: MoviesService,
    private route:ActivatedRoute,
    private _moviesService:InTheaterService
    ) {}

  query: string;
  movies$:[];
  movie: MovieModel;
  // isLoading = true;

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
      }
    );
  }
  getSearchResults() {
     this.movieService.searchMovie(this.query).subscribe((data:any) =>{
      this.movies$ =data.results.slice(0,12);
    });
  }
}