import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  trendingUrl = `https://api.themoviedb.org/3/trending/all/day?page=1&api_key=555b6d37996849e85d8e21029c5e41f3`

  getTrendings() {
    return this.http.get<any>(this.trendingUrl);
  }
  constructor(private http: HttpClient) { }
}
