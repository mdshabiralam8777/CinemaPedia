import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginatorModel } from 'src/app/models/paginator.model';
import { InTheaterService } from 'src/app/servicess/inTheater/in-theater.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  title: string;
  movies: Array<PaginatorModel> = [];

  constructor(
    private _moviesService: InTheaterService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.router.params.subscribe( (params) => {
      const id = params['id'];
      this.title = params['name'];
      this.getMoviesByGenre(id);
    });
  }
  
  getMoviesByGenre(id) {
    const moviesByGenreSubs = this._moviesService.getMoviesByGenre(id).subscribe(
      res => {
        this.movies = res.results;
        this.movies.forEach(np => np['isMovie'] = true);
      }, error => console.log(error),
      () => { if (moviesByGenreSubs) { moviesByGenreSubs.unsubscribe(); } }
    );
  }
}
