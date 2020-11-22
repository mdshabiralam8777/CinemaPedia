import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TvCast } from 'src/app/models/onTV/tv-cast';
import { TvVideo } from 'src/app/models/onTV/tv-video';
import { TvShowModel } from 'src/app/models/onTV/tvShow.model';
import { PaginatorModel } from 'src/app/models/paginator.model';
import { OnTVService } from 'src/app/servicess/onTV/on-tv.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})
export class TvShowComponent implements OnInit {

  tvShow: TvShowModel;
  isLoading = true;
  similarShow: Array<PaginatorModel> = [];
  cast:TvCast;
  video:TvVideo;

  @ViewChild('closeModal', { static: false }) public  closeModal: ElementRef;
  @ViewChild('openModal', { static: false }) public  openModal: ElementRef;

  constructor(
    private onTvService: OnTVService,
    private route: ActivatedRoute,
    private sanitizer:DomSanitizer,
    public dialog:  MatDialog
  ) { }

  

  ngOnInit(): void {
    this.route.params.subscribe( (params) => {
      const id = params['id'];
      // this.onTvService.getTVShow(id).subscribe( tvShow => {
      //   this.tvShow = tvShow;
      //   if (!this.tvShow) {
      //     alert('Server Error')
      //   } else {
      //     this.isLoading = false;
      //   }
      // });
       this.getShow(id);
      this.getShowCredits(id);
      this.getShowVideo(id);
      this.getRecomendedShow(id);

    });
    
  }
  //get movie details by ID
  getShow(id) {
    const ShowSubs = this.onTvService.getShow(id).subscribe(
      tvShow => {
        this.tvShow = tvShow;

        if (!this.tvShow) {
          alert('Server Error')
        } else {
          this.isLoading = false;
        }
      }, () => {},
      () => { if (ShowSubs) { ShowSubs.unsubscribe() } }
    );
  }
  
  getShowCredits(id) {
    const tvCreditsSubs = this.onTvService.getShowCredits(id).subscribe(
      res => {
        // console.log(res);
        res.cast = res.cast.filter( item => { return item.profile_path });
        this.cast = res.cast.slice(0,10);
      }, () => {},
      () => { if (tvCreditsSubs) { tvCreditsSubs.unsubscribe() } }
    );
  }

  getRecomendedShow(id) {
    const recomendedShowSubs = this.onTvService.getRecomendShow(id).subscribe(
      res => {
        this.similarShow = res.results.slice(0, 8);
        this.similarShow.forEach(np => np['isTv'] = true);
      }, () => {},
      () => { if (recomendedShowSubs) { recomendedShowSubs.unsubscribe() } }
    );
  }
  getShowVideo(id) {
    const ShowVideosSubs = this.onTvService.getShowVideo(id).subscribe(
      res => {
        if (res.results && res.results.length) {
          this.video = res.results[0];
          this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
        }
      }, () => {},
      () => { if (ShowVideosSubs) { ShowVideosSubs.unsubscribe() } }
    );
  }

  // ------------------------ Trailer--------------------------------
  openDialog(): void {
    this.dialog.open(AppShowDialogComponent, {
      height: '500px',
      width: '800px',
      data: { video: this.video}
    });
  }

}

//App Dialoge for Tv-Show Trialer part HTML 

@Component({
  selector: 'app-show-dialog',
  templateUrl: 'app-show-dialog.html'
})
export class AppShowDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<AppShowDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeDialog() {
    this.dialogRef.close('Biryani!');
  }

}