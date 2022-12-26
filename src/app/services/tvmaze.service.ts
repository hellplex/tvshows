import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http.get('http://api.tvmaze.com/search/shows', {
      params: {
        q: term,
        origin: '*'
      }
    });
  }
}
