import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { SingleShowComponent } from './single-show/single-show.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { TopShowsComponent } from './top-shows/top-shows.component';

const routes: Routes = [
  {path:'top-movies', component:TopMoviesComponent},
  {path:'', component: LandingPageComponent},
  {path:'top-shows', component: TopShowsComponent},
  {path: 'discover', component:DiscoverComponent},
  {path: 'movie/:id', component:SingleMovieComponent},
  {path: 'show/:id', component:SingleShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
