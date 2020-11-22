import { HomeComponent } from './components/home/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CinemaComponent } from './cinema/cinema.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './merchandise/login/login.component';
import { RegisterComponent } from './merchandise/register/register.component';
import { ShoppingComponent } from './merchandise/shopping/shopping.component';
import {ViewDetailsComponent} from './merchandise/shopping/view-details/view-details.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ActorsdetailsComponent } from './actorsdetails/actorsdetails.component';
import { ActorsComponent } from './actors/actors.component';
import { CategoryComponent } from './category/category.component';
import { DirectorsComponent } from './directors/directors.component';
import { DirectordetailsComponent } from './directordetails/directordetails.component';
import { Homepage2Component } from './homepage2/homepage2.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3Component } from './section3/section3.component';
import { Section3TComponent } from './section3-t/section3-t.component';
import { TollyComponent } from './tolly/tolly.component';
import { TollydetailsComponent } from './tollydetails/tollydetails.component';
import { MovieComponent } from './components/InTheater/movie/movie.component';
import { SearchComponent } from './search/search.component';
import { AllMoviesComponent } from './components/InTheater/all-movies/all-movies.component';
import { GenresListComponent } from './components/InTheater/genres-list/genres-list.component';
import { GenresComponent } from './components/InTheater/genres/genres.component';
import { AllTvShowsComponent } from './components/OnTV/all-tv-shows/all-tv-shows/all-tv-shows.component';
import { TvShowComponent } from './components/OnTV/tv-show/tv-show/tv-show.component';
import { GenresTvComponent } from './components/OnTV/genres-tv/genres-tv/genres-tv.component';
import { Home4ffComponent } from './home4ff/home4ff.component';
import { ActorComponent } from './components/actor/actor/actor.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { LanguageMovieComponent } from './components/language-movie/language-movie.component';
import { DirectorsTollydetailsComponent } from './directors-tollydetails/directors-tollydetails.component';
import { HeroTollyComponent } from './hero-tolly/hero-tolly.component';
import { HeroTollydetailsComponent } from './hero-tollydetails/hero-tollydetails.component';
import { DirectorsTollyComponent } from './directors-tolly/directors-tolly.component';
import { MovieTollyComponent } from './movie-tolly/movie-tolly.component';
import { MovieTollydetailsComponent } from './movie-tollydetails/movie-tollydetails.component';
import { HeroTaComponent } from './hero-ta/hero-ta.component';
import { HerodetilsTaComponent } from './herodetils-ta/herodetils-ta.component';
import { Section3MComponent } from './section3-m/section3-m.component';
import { Section3BComponent } from './section3-b/section3-b.component';
import { HeroMollyComponent } from './hero-molly/hero-molly.component';
import { HeroDetailsMollyComponent } from './hero-details-molly/hero-details-molly.component';
import { MusicMollyComponent } from './music-molly/music-molly.component';
import { MusicDetailsMollyComponent } from './music-details-molly/music-details-molly.component';
import { HeroBollyComponent } from './hero-bolly/hero-bolly.component';
import { HeroDetailsBollyComponent } from './hero-details-bolly/hero-details-bolly.component';
import { DirMollyComponent } from './dir-molly/dir-molly.component';
import { DirDetailsMollyComponent } from './dir-details-molly/dir-details-molly.component';
import { DirBollyComponent } from './dir-bolly/dir-bolly.component';
import { DirDetailsBollyComponent } from './dir-details-bolly/dir-details-bolly.component';
import { MovieMollyComponent } from './movie-molly/movie-molly.component';
import { MovieDetailsMollyComponent } from './movie-details-molly/movie-details-molly.component';
import { MoviesBollyComponent } from './movies-bolly/movies-bolly.component';
import { MoviesDetailsBollyComponent } from './movies-details-bolly/movies-details-bolly.component';
import { MusicBollyComponent } from './music-bolly/music-bolly.component';
import { MusicDetailsBollyComponent } from './music-details-bolly/music-details-bolly.component';
import { DirTollyComponent } from './dir-tolly/dir-tolly.component';
import { DirDetailsTollyComponent } from './dir-details-tolly/dir-details-tolly.component';
const routes: Routes = [

  { path:'',redirectTo:'/home',pathMatch: 'full'},
  {path:'home',component:Home4ffComponent},
  { path:'', redirectTo:'/section1', pathMatch:'full'},
  { path:'search',component:SearchComponent},
  { path:'cinema',component:HomeComponent},
  { path:'section1',component: Section1Component},
  { path:'section2',component:Section2Component},
  { path:'section3',component:Section3Component},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'shopping',component:ShoppingComponent},
  {path:'viewDetails',component:ViewDetailsComponent},
  // {path:'**',component:PageNotFoundComponent}
  { path:'category',component:CategoryComponent},
  {path:'directors',component:DirectorsComponent},
  {path:'directordetails/:id',component:DirectordetailsComponent},
  {path:'employees',component:ActorsComponent},
  {path:'employees/:id',component:ActorsComponent},
  {path:'actorsdetails/:id',component:ActorsdetailsComponent},
  {path:'section1',component: Section1Component},
  {path:'section2',component:Section2Component},
  {path:'section3',component:Section3Component},
  {path:'section3-t',component:Section3TComponent},
  {path:'section3-m',component:Section3MComponent},
  {path:'section3-b',component:Section3BComponent},
  {path:'tolly',component:TollyComponent},
  {path:'tollydetails/:id',component:TollydetailsComponent},
  { path: 'home',component:HomepageComponent},
  // { path: 'home/movie',component:CinemaComponent},
  { path: 'movie/:id', component: MovieComponent },
  { path: 'all-movies', component: AllMoviesComponent},
  { path: 'genres', component: GenresListComponent },
  { path: 'genres/:id/:name', component: GenresComponent },
  { path: 'all-tv-shows', component: AllTvShowsComponent},
  { path: 'tv-show/:id', component: TvShowComponent },
  { path: 'genres-tv/:id/:name', component: GenresTvComponent },
  { path: 'actor/:id', component: ActorComponent },
  { path: 'lang',component:LanguageMovieComponent},
  //Priya Routing Part
  { path: 'music-details/:id',component:MusicDetailsComponent},
  { path: 'musictollydetails/:id',component:DirectorsTollydetailsComponent},
  { path: 'herotolly',component:HeroTollyComponent},
  { path: 'herotollydetails/:id',component:HeroTollydetailsComponent},
  { path: 'directorstolly',component:DirectorsTollyComponent},
  { path: 'movietolly',component:MovieTollyComponent},
  { path: 'movietollydetails/:id',component:MovieTollydetailsComponent},
  { path: 'hero',component:HeroTaComponent},
  { path: 'herotolly',component:MovieTollyComponent},
  { path: 'herodetils/:id',component:HerodetilsTaComponent},
  { path: 'heromolly',component:HeroMollyComponent},
  { path: 'heromollydetails/:id',component:HeroDetailsMollyComponent},
  { path: 'musicmolly',component:MusicMollyComponent},
  { path: 'musicmollydetails/:id',component:MusicDetailsMollyComponent},
  { path: 'herobolly',component:HeroBollyComponent},
  { path: 'herobollydetails/:id',component:HeroDetailsBollyComponent},
  { path: 'dirmolly',component:DirMollyComponent},
  { path: 'dirdetailsmolly/:id',component:DirDetailsMollyComponent},
  { path: 'dirbolly',component:DirBollyComponent},
  { path: 'dirdetailsbolly/:id',component:DirDetailsBollyComponent},
  { path: 'moviemolly',component:MovieMollyComponent},
  { path: 'moviemollydetails/:id',component:MovieDetailsMollyComponent},
  { path: 'moviebolly',component:MoviesBollyComponent},
  { path: 'moviebollydetails/:id',component:MoviesDetailsBollyComponent},
  { path: 'musicbolly',component:MusicBollyComponent},
  { path: 'musicbollydetails/:id',component:MusicDetailsBollyComponent},
  { path: 'dirtolly',component:DirTollyComponent},
  { path: 'dirdetailstolly/:id',component:DirDetailsTollyComponent},
  // { path: 'search/:id', component: MovieComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
