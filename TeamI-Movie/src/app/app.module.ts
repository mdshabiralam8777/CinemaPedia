import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './merchandise/footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { CinemaComponent } from './cinema/cinema.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { A11yModule } from '@angular/cdk/a11y';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { PosterCardComponent } from './components/ui/poster-card-view/poster-card/poster-card.component';
import { HomeComponent } from './components/home/home/home.component';
import { ActorComponent } from './components/actor/actor/actor.component';
import { AppShowDialogComponent, TvShowComponent } from './components/OnTV/tv-show/tv-show/tv-show.component';
import { GenresTvComponent } from './components/OnTV/genres-tv/genres-tv/genres-tv.component';
import { AllTvShowsComponent } from './components/OnTV/all-tv-shows/all-tv-shows/all-tv-shows.component';
import { AppMovieDialogComponent, MovieComponent } from './components/InTheater/movie/movie.component';
import { SearchComponent } from './search/search.component';
import { GenresComponent } from './components/InTheater/genres/genres.component';
import { GenresListComponent } from './components/InTheater/genres-list/genres-list.component';
import { AllMoviesComponent } from './components/InTheater/all-movies/all-movies.component';
//Amalar Imports
import { FaqComponent } from './merchandise/faq/faq.component';
import { AboutComponent } from './merchandise/about/about.component';
import { TrackComponent } from './merchandise/track/track.component';
import { ContactComponent } from './merchandise/contact/contact.component';
import { BulkorderComponent } from './merchandise/bulkorder/bulkorder.component';
import { CareersComponent } from './merchandise/careers/careers.component';
import { TermsComponent } from './merchandise/terms/terms.component';
import { ReturnpolicyComponent } from './merchandise/returnpolicy/returnpolicy.component';
import { MyAccountComponent } from './merchandise/my-account/my-account.component';
import { TrialsComponent } from './trials/trials.component';
import { MpageComponent } from './merchandise/main/mpage/mpage.component';
import { MheaderComponent } from './merchandise/main/mheader/mheader.component';
import { ShoppingComponent } from './merchandise/shopping/shopping.component';
import { FiltersComponent } from './merchandise/shopping/filters/filters.component';
import { ProductsComponent } from './merchandise/shopping/products/products.component';
import { CartComponent } from './merchandise/shopping/cart/cart.component';
import { CartItemComponent } from './merchandise/shopping/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './merchandise/shopping/products/product-item/product-item.component';
import { Home4ffComponent } from './home4ff/home4ff.component';
import { LoginComponent } from './merchandise/login/login.component';
import { RegisterComponent } from './merchandise/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewDetailsComponent } from './merchandise/shopping/view-details/view-details.component';
import { ViewsComponent } from './merchandise/shopping/view-details/views/views.component';
import { CartviewComponent } from './merchandise/shopping/view-details/cartview/cartview.component';
import { WishlistviewComponent } from './merchandise/shopping/view-details/wishlistview/wishlistview.component';
import { CheckoutComponent } from './merchandise/shopping/cart/checkout/checkout.component';
import { FirebaseService } from './services/firebase.service';
import { ActorsComponent } from './actors/actors.component';
import { ActorsdetailsComponent } from './actorsdetails/actorsdetails.component';
import { CategoryComponent } from './category/category.component';
import { DirectorsComponent } from './directors/directors.component';
import { DirectordetailsComponent } from './directordetails/directordetails.component';
import { Homepage2Component } from './homepage2/homepage2.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import { Section3TComponent } from './section3-t/section3-t.component';
import { TollyComponent } from './tolly/tolly.component';
import { TollydetailsComponent } from './tollydetails/tollydetails.component';
import { Section3Component } from './section3/section3.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { LanguageMovieComponent } from './components/language-movie/language-movie.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { HeroTollyComponent } from './hero-tolly/hero-tolly.component';
import { HeroTollydetailsComponent } from './hero-tollydetails/hero-tollydetails.component';
import { DirectorsTollyComponent } from './directors-tolly/directors-tolly.component';
import { DirectorsTollydetailsComponent } from './directors-tollydetails/directors-tollydetails.component';
import { MovieTollyComponent } from './movie-tolly/movie-tolly.component';
import { MovieTollydetailsComponent } from './movie-tollydetails/movie-tollydetails.component';
import { HeroTaComponent } from './hero-ta/hero-ta.component';
import { HerodetilsTaComponent } from './herodetils-ta/herodetils-ta.component';
import { OrderPlacedComponent } from './merchandise/shopping/cart/order-placed/order-placed.component';
import { Section3BComponent } from './section3-b/section3-b.component';
import { Section3MComponent } from './section3-m/section3-m.component';
import { HeroMollyComponent } from './hero-molly/hero-molly.component';
import { HeroDetailsMollyComponent } from './hero-details-molly/hero-details-molly.component';
import { MovieMollyComponent } from './movie-molly/movie-molly.component';
import { MovieDetailsMollyComponent } from './movie-details-molly/movie-details-molly.component';
import { MusicMollyComponent } from './music-molly/music-molly.component';
import { MusicDetailsMollyComponent } from './music-details-molly/music-details-molly.component';
import { HeroBollyComponent } from './hero-bolly/hero-bolly.component';
import { HeroDetailsBollyComponent } from './hero-details-bolly/hero-details-bolly.component';
import { MoviesBollyComponent } from './movies-bolly/movies-bolly.component';
import { MoviesDetailsBollyComponent } from './movies-details-bolly/movies-details-bolly.component';
import { MusicBollyComponent } from './music-bolly/music-bolly.component';
import { MusicDetailsBollyComponent } from './music-details-bolly/music-details-bolly.component';
import { DirTollyComponent } from './dir-tolly/dir-tolly.component';
import { DirDetailsTollyComponent } from './dir-details-tolly/dir-details-tolly.component';
import { DirMollyComponent } from './dir-molly/dir-molly.component';
import { DirDetailsMollyComponent } from './dir-details-molly/dir-details-molly.component';
import { DirBollyComponent } from './dir-bolly/dir-bolly.component';
import { DirDetailsBollyComponent } from './dir-details-bolly/dir-details-bolly.component';

 

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  declarations: [
    //Shabbir Declaration:
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomepageComponent,
    CinemaComponent,
    CapitalizePipe,
    PosterCardComponent,
    HomeComponent,
    ActorComponent,
    TvShowComponent,
    GenresTvComponent,
    AllTvShowsComponent,
    MovieComponent,
    SearchComponent,
    GenresComponent,
    GenresListComponent,
    AllMoviesComponent,
    //Amalkar Declaration
    FooterComponent,
    FaqComponent,
    AboutComponent,
    TrackComponent,
    ContactComponent,
    BulkorderComponent,
    CareersComponent,
    TermsComponent,
    ReturnpolicyComponent,
    MyAccountComponent,
    TrialsComponent,
    MpageComponent,
    MheaderComponent,
    ShoppingComponent,
    FiltersComponent,
    ProductsComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    Home4ffComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ViewDetailsComponent,
    ViewsComponent,
    CartviewComponent,
    WishlistviewComponent,
    CheckoutComponent,
    ActorsComponent,
    ActorsdetailsComponent,
    CategoryComponent,
    DirectorsComponent,
    DirectordetailsComponent,
    Homepage2Component,
    Section1Component,
    Section2Component,
    Section3Component,
    Section3TComponent,
    TollyComponent,
    TollydetailsComponent,
    Section3Component,
    HomeFooterComponent,
    AppMovieDialogComponent,
    AppShowDialogComponent,
    LanguageMovieComponent,
    MusicDetailsComponent,
    HeroTollyComponent,
    HeroTollydetailsComponent,
    DirectorsTollyComponent,
    DirectorsTollydetailsComponent,
    MovieTollyComponent,
    MovieTollydetailsComponent,
    HeroTaComponent,
    HerodetilsTaComponent,
    OrderPlacedComponent,
    Section3BComponent,
    Section3MComponent,
    HeroMollyComponent,
    HeroDetailsMollyComponent,
    MovieMollyComponent,
    MovieDetailsMollyComponent,
    MusicMollyComponent,
    MusicDetailsMollyComponent,
    HeroBollyComponent,
    HeroDetailsBollyComponent,
    MoviesBollyComponent,
    MoviesDetailsBollyComponent,
    MusicBollyComponent,
    MusicDetailsBollyComponent,
    DirTollyComponent,
    DirDetailsTollyComponent,
    DirMollyComponent,
    DirDetailsMollyComponent,
    DirBollyComponent,
    DirDetailsBollyComponent,
  ],
  
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgImageSliderModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatPseudoCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    DragDropModule, 
    ScrollingModule, 
    OverlayModule, 
    PortalModule, 
    A11yModule, 
    CdkStepperModule, 
    CdkTableModule,
    SwiperModule,
    FormsModule,
    NoopAnimationsModule,
  
    NgbModule,RouterModule.forRoot([
      {path:"contact",component:ContactComponent},
      {path:"track",component:TrackComponent},
      {path:"faq",component:FaqComponent},
      {path:"about",component:AboutComponent},
      {path:"bulkorder",component:BulkorderComponent},
      {path:"careers",component:CareersComponent},
      {path:"terms",component:TermsComponent},
      {path:"returnpolicy",component:ReturnpolicyComponent},
      {path:"my-account",component:MyAccountComponent},
      {path:"womens",component:ShoppingComponent},
      {path:"csk",component:ShoppingComponent},
      {path:"accessories",component:ShoppingComponent},
      {path:"unisex",component:ShoppingComponent},
      {path:"posters",component:ShoppingComponent},
      {path:"merchandiseMainPage",component:MpageComponent},
      {path:"viewDetails",component:ViewDetailsComponent},
      {path:"cart",component:CartviewComponent},
      {path:"wishlist",component:CartviewComponent},
      {path:"checkout",component:CheckoutComponent},
      {path:"orderplaced",component:OrderPlacedComponent},
      {path:"",component:Home4ffComponent}
    ])
  ],
  providers: [
    FirebaseService,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }

  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
