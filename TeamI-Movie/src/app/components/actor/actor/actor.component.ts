import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actors } from 'src/app/models/actors';
import { MovieModel } from 'src/app/models/movie.model';
import { InTheaterService } from 'src/app/servicess/inTheater/in-theater.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {

  person: Actors = new Actors();
  movies: MovieModel = new MovieModel();
  externalIds: Object = {};
  constructor(
    private _moviesSerice: InTheaterService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._moviesSerice.getPersonDetail(id).subscribe(person => {
        this.person = person;
        console.log(person);
      }, error => console.log(error));
      this._moviesSerice.getPersonCast(id).subscribe(res => {
        this.movies = res.cast;
        console.log(this.movies);
      }, error => console.log(error));

      this._moviesSerice.getPersonExternalData(id).subscribe(res => {
        this.externalIds = res;
      }, error => console.log(error));
    });
  }

}
