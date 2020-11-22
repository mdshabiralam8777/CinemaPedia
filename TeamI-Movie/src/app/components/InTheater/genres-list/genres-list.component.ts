import { Component, OnInit } from '@angular/core';
import { GenresListModel } from 'src/app/models/genres-list';
import { InTheaterService } from 'src/app/servicess/inTheater/in-theater.service';

@Component({
  selector: 'app-genres-list',
  templateUrl: './genres-list.component.html',
  styleUrls: ['./genres-list.component.css']
})
export class GenresListComponent implements OnInit {

  genres: GenresListModel;
  constructor(
    private _moviesServices: InTheaterService
  ) { }

  ngOnInit(): void {
    this._moviesServices.getGenres().subscribe( res => {
      this.genres = res.genres;
    });
  }

}
