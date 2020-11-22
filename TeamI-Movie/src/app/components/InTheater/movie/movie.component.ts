import { MovieVideo } from './../../../models/movie-video';
import { MovieCast } from './../../../models/movie-cast';
import { PaginatorModel } from './../../../models/paginator.model';
import { MovieModel } from './../../../models/movie.model';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InTheaterService } from './../../../servicess/inTheater/in-theater.service';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie: MovieModel;
  similarMovies: Array<PaginatorModel> = [];
  cast: MovieCast;
  video: MovieVideo;
  isLoading = true;

  @ViewChild('closeModal', { static: false }) public  closeModal: ElementRef;
  @ViewChild('openModal', { static: false }) public  openModal: ElementRef;

  constructor(
    private _moviesService:InTheaterService,
    private route:ActivatedRoute,
    private sanitizer:DomSanitizer,
    public dialog:  MatDialog
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.getMovie(id);
        this.getMovieCredits(id);
        this.getMovieVideo(id);
        this.getRecomendedMovie(id);
      }
    );
  }

  //get movie details by ID
  getMovie(id) {
    const movieSubs = this._moviesService.getMovie(id).subscribe(
      movie => {
        this.movie = movie;

        if (!this.movie) {
          alert('Server Error')
        } else {
          this.isLoading = false;
        }
      }, () => {},
      () => { if (movieSubs) { movieSubs.unsubscribe() } }
    );
  }

  getMovieCredits(id) {
    const movieCreditsSubs = this._moviesService.getMovieCredits(id).subscribe(
      res => {
        // console.log(res);
        res.cast = res.cast.filter( item => { return item.profile_path });
        this.cast = res.cast.slice(0,10);
      }, () => {},
      () => { if (movieCreditsSubs) { movieCreditsSubs.unsubscribe() } }
    );
  }

  getRecomendedMovie(id) {
    const recomendedMoviesSubs = this._moviesService.getRecomendMovies(id).subscribe(
      res => {
        this.similarMovies = res.results.slice(0, 8);
        this.similarMovies.forEach(np => np['isMovie'] = true);
      }, () => {},
      () => { if (recomendedMoviesSubs) { recomendedMoviesSubs.unsubscribe() } }
    );
  }

  getMovieVideo(id) {
    const movieVideosSubs = this._moviesService.getMovieVideos(id).subscribe(
      res => {
        if (res.results && res.results.length) {
          this.video = res.results[0];
          this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
        }
      }, () => {},
      () => { if (movieVideosSubs) { movieVideosSubs.unsubscribe() } }
    );
  }

  openDialog(): void {
    this.dialog.open(AppMovieDialogComponent, {
      height: '500px',
      width: '800px',
      data: { video: this.video}
    });
  }

}


//App Dialoge for movies Trialer part HTML 

@Component({
  selector: 'app-movie-dialog',
  templateUrl: 'app-movie-dialog.html'
})
export class AppMovieDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AppMovieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog() {
    this.dialogRef.close('Biryani!');
  }

}