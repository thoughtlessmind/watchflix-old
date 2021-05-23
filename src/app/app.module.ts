import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TrendingSectionComponent } from './trending-section/trending-section.component';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TopShowsComponent } from './top-shows/top-shows.component';
import { DiscoverComponent } from './discover/discover.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { SingleShowComponent } from './single-show/single-show.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrendingSectionComponent,
    WelcomeSectionComponent,
    TopMoviesComponent,
    LandingPageComponent,
    TopShowsComponent,
    DiscoverComponent,
    SingleMovieComponent,
    SingleShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
