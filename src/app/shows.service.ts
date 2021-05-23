import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  trendingShowsUrl: string =
    'https://api.themoviedb.org/3/trending/tv/day?page=1&api_key=555b6d37996849e85d8e21029c5e41f3';

  trendingShows() {
    return this.http.get<any>(this.trendingShowsUrl);
  }
  constructor(private http: HttpClient) {}
}
