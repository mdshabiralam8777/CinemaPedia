import { PaginatorModel } from './../models/paginator.model';
// import {MatPaginatorModule} from '@angular/material/paginator';
import {AfterViewInit, Component, OnInit, ViewChild,ViewEncapsulation} from '@angular/core';
import { MoviesService } from '../movies.service';
import {SwiperConfigInterface} from 'ngx-swiper-wrapper';
import { SwiperComponent, SwiperDirective } from 'ngx-swiper-wrapper';
import { SwiperOptions } from 'swiper';
import { PaginationOptions } from 'swiper/types/components/pagination';
import { ScrollbarOptions } from 'swiper/types/components/scrollbar';


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CinemaComponent implements OnInit {

  constructor(private movies:MoviesService) { }

  // public config: SwiperConfigInterface = {};


  public moviesList:Array<PaginatorModel> = [];
  public imageBaseurl = 'https://image.tmdb.org/t/p/';
  public poster:any;
  topRatedList: Array<PaginatorModel> = [];
  nowPlaying:   Array<PaginatorModel> = [];
  onTheAir:     Array<PaginatorModel> = [];
  onTvAirToday: Array<PaginatorModel> = [];
  onTvPopular:  Array<PaginatorModel> = [];

  ngOnInit(): void {
    // Popular Movies
    this.movies.getPoularMovies().subscribe((data:any) =>{
      this.moviesList=data.results;
      console.log(data.results);
    })
    // Top Rated Movies
    this.movies.getTopRatedMovies().subscribe((res:any) => {
      this.topRatedList = res.results;
    });
    // Now Playing movies
    this.getNowPlayinMovies();

    // now Airing TV show
    this.getTvOnTheAir();

    //Tv show airing today
    this.getTVAiringToday();

    //TV Popular Show
    this.getPopularTVShow();
  }
  
  //Movies
  getNowPlayinMovies() {
    this.movies.getNowPlaying().subscribe( res => {
      this.nowPlaying = res.results;
    });
  }
  // get Popular TV show
  getPopularTVShow() {
    const getTVonTheAirSubs = this.movies.getPopularTVShow().subscribe((res:any) => {
        this.onTvPopular = res.results;
      });
  }

  //get TV show Airing Today
  getTVAiringToday() {
    const getTVonTheAirSubs = this.movies.getTVAiringToday().subscribe((res:any) => {
        this.onTvAirToday = res.results;
      });
  }
  getTvOnTheAir() {
    this.movies.getTvOnTheAir().subscribe((res:any) => {
      this.onTheAir = res.results;
    });
  }
  public config: SwiperOptions = {
    // a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 4,
    // keyboard: true,
    // mousewheel: false,
    // scrollbar: false,
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
  
        
  //     spaceBetween: 20

  // changeTab() {

  //   this.config = {
  //     direction: 'horizontal',
  //     slidesPerView: 4,
  //     navigation: true,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //       hideOnClick: true
  //     },
  //     breakpoints: {
  //       1199: {
  //         slidesPerView: 4,
  //         spaceBetween: 20,
  //       },
  //       991: {
  //         slidesPerView: 2,
  //         spaceBetween: 20,
  //       },
  //       767: {
  //         slidesPerView: 2,
  //         spaceBetween: 20,
  //       },
  //       480: {
  //         slidesPerView: 1,
  //         spaceBetween: 0,
  //       }
  //     },
  //     spaceBetween: 20
  //   };
  // }
 
}
