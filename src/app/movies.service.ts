import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  trendingMoviesUrl =
    'https://api.themoviedb.org/3/trending/movie/day?page=1&api_key=555b6d37996849e85d8e21029c5e41f3';

  getTredingMovies() {
    return this.http.get<any>(this.trendingMoviesUrl);
  }

  constructor(private http: HttpClient) {}
}
