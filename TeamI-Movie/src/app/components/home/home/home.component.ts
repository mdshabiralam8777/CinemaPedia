import { PaginatorModel } from './../../../models/paginator.model';
import { OnTVService } from './../../../servicess/onTV/on-tv.service';
import { InTheaterService } from './../../../servicess/inTheater/in-theater.service';
import { Component, OnInit,ViewChild ,AfterViewInit, ViewEncapsulation} from '@angular/core';

import {
  SwiperComponent, SwiperConfigInterface, SwiperDirective
} from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit,AfterViewInit{
  
  nowPlaying: Array<PaginatorModel> = [];
  popularList: Array<PaginatorModel> = [];
  upcomingList: Array<PaginatorModel> = [];
  topRatedList: Array<PaginatorModel> = [];

  onTheAir: Array<PaginatorModel> = [];
  airingToday: Array<PaginatorModel> = [];
  popularTvShows: Array<PaginatorModel> = [];

  public config: SwiperConfigInterface = {};

  @ViewChild(SwiperComponent, { static: false }) componentRef: SwiperComponent;
  @ViewChild(SwiperDirective, { static: true }) directiveRef: SwiperDirective;
  

  constructor(
    private moviesService: InTheaterService,
    private onTvService:  OnTVService
    ) {
      this.moviesService.getUpComingMovies(1).subscribe(res => {
        this.upcomingList = res.results.filter((up:any) => new Date(up.release_date).getTime() >= new Date().getTime());
        this.upcomingList.forEach(np => np['isMovie'] = true);
      });
  
      this.moviesService.getTopRatedMovies().subscribe(res => {
        this.topRatedList = res.results;
      });
     }

  ngOnInit(): void {
    this.getNowPlayinMovies(1);
    this.getPopularMovies(1);

    //  On TV
    this.getTvOnTheAir(1);
    this.getAiringToday(1);
    this.getPopularTvShow(1);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.config = {
        direction: 'horizontal',
        slidesPerView: 4,
        navigation: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          hideOnClick: true
        },
        breakpoints: {
          1199: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          991: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 0,
          }
        },
        spaceBetween: 20
      };
    }, 50)
  }

  changeTab() {

    this.config = {
      direction: 'horizontal',
      slidesPerView: 4,
      navigation: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        hideOnClick: true
      },
      breakpoints: {
        1199: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        991: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 0,
        }
      },
      spaceBetween: 20
    };
  }
  getNowPlayinMovies(page: number) {
    this.moviesService.getNowPlaying(page).subscribe( res => {
      this.nowPlaying = res.results;
      this.nowPlaying.forEach(np => np['isMovie'] = true);
    });
  }

  getPopularMovies(page: number) {
    this.moviesService.getPopular(page).subscribe(res => {
      this.popularList = res.results;
      this.popularList.forEach(np => np['isMovie'] = true);
    });
  }

  //  On TV

  getTvOnTheAir(page: number) {
    this.onTvService.getTvOnTheAir(page).subscribe(
      res => {
        this.onTheAir = res.results;
        this.onTheAir.forEach(np => np['isMovie'] = false);
        setTimeout(() => {
          this.config = {
            direction: 'horizontal',
            slidesPerView: 4,
            navigation: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              hideOnClick: true
            },
            breakpoints: {
              1199: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              991: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              767: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 0,
              }
            },
            spaceBetween: 20
          };
        }, 100)
      },
      error => console.log(error)
    );
  }
  getAiringToday(page: number) {
    this.onTvService.getTVAiringToday(page).subscribe(
      res => {
        this.airingToday = res.results;
        this.airingToday.forEach(np => np['isMovie'] = false);
      },
      error => console.log(error)
    );
  }

  getPopularTvShow(page: number) {
    this.onTvService.getPopularTVShow(page).subscribe(
      res => {
        this.popularTvShows = res.results;
        this.popularTvShows.forEach(np => np['isMovie'] = false);
      },
      error => console.log(error)
    );
  }

}
