import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css'],
})
export class TopMoviesComponent implements OnInit {
  trendingMovies:any = [];
  page: number = 1;

  constructor(private movieService: MoviesService) {}

  getTrendingMovies(): void {
    this.movieService
      .getTredingMovies()
      .subscribe((data) => (this.trendingMovies = data.results));
  }

  ngOnInit(): void {
    this.getTrendingMovies()
  }
}
