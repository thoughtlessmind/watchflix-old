import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  searchUrl = `https://api.themoviedb.org/3/search/multi?page=1&api_key=555b6d37996849e85d8e21029c5e41f3&language=en-US&query=`;

  searchSuggestions(term: string): Observable<any> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get((`${this.searchUrl}${term}`))
  }

  constructor(private http: HttpClient) {}
}
