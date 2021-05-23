import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  baseUrl = `https://api.themoviedb.org/3`;
  key = `api_key=555b6d37996849e85d8e21029c5e41f3`;

  trendingShowsUrl: string =
    'https://api.themoviedb.org/3/trending/tv/day?page=1&api_key=555b6d37996849e85d8e21029c5e41f3';

  /**
   * Fetch trending shows of the day
   */
  trendingShows() {
    return this.http.get<any>(this.trendingShowsUrl);
  }

  /**
   * Fetch details of a single tv show
   * @param id Tv Show Id
   */
  getSingleShowDetails(id: string | number) {
    const url = `${this.baseUrl}/tv/${id}?${this.key}&append_to_response=images,videos,credits,certification,watch%2Fproviders&`;
    return this.http.get<any>(url);
  }

  constructor(private http: HttpClient) {}
}
