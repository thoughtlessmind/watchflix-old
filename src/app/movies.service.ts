import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl = `https://api.themoviedb.org/3`;
  key=`api_key=555b6d37996849e85d8e21029c5e41f3`
  trendingMoviesUrl =
    'https://api.themoviedb.org/3/trending/movie/day?page=1&api_key=555b6d37996849e85d8e21029c5e41f3';

  getTredingMovies() {
    return this.http.get<any>(this.trendingMoviesUrl);
  }

  getSingleMovieDetails(id: string | number) {
    const url = `${this.baseUrl}/movie/${id}?${this.key}&append_to_response=images,videos,credits,certification,watch%2Fproviders&`;
    return this.http.get<any>(url);
  }

  constructor(private http: HttpClient) {}
}
