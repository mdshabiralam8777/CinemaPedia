import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginatorModel } from 'src/app/models/paginator.model';
import { OnTVService } from 'src/app/servicess/onTV/on-tv.service';

@Component({
  selector: 'app-genres-tv',
  templateUrl: './genres-tv.component.html',
  styleUrls: ['./genres-tv.component.css']
})
export class GenresTvComponent implements OnInit {

  title: string;
  tvShow: Array<PaginatorModel> = [];

  constructor(
    private onTVService: OnTVService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe( (params) => {
      const id = params['id'];
      this.title = params['name'];
      this.onTVService.getTVShowByGenre(id).subscribe( res => {
        this.tvShow = res.results;
      }, error => console.log(error));
    });
  }
}
