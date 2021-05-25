import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  baseUrl = `https://api.themoviedb.org/3`;
  key = `api_key=555b6d37996849e85d8e21029c5e41f3`;

  /**
   * Fetch person info
   * @param id Person id
   */
  getPersonInfo(id: string | number) {
    const url = `${this.baseUrl}/person/${id}?${this.key}&append_to_response=images,biography`;
    return this.http.get<any>(url);
  }

  constructor(private http: HttpClient) {}
}
