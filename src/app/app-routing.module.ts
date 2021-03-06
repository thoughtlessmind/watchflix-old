import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PersonPageComponent } from './person-page/person-page.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { SingleShowComponent } from './single-show/single-show.component';
import { TopMoviesComponent } from './top-movies/top-movies.component';
import { TopShowsComponent } from './top-shows/top-shows.component';

const routes: Routes = [
  {path:'', component: LandingPageComponent},
  {path:'top-movies', component:TopMoviesComponent},
  {path:'top-shows', component: TopShowsComponent},
  {path: 'discover', component:DiscoverComponent},
  {path: 'movie/:id', component:SingleMovieComponent},
  {path: 'tv/:id', component:SingleShowComponent},
  {path: 'person/:id', component:PersonPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
