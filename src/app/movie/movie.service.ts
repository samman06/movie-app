import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieDate: any;
  url: string = 'http://www.omdbapi.com/?i=tt3896198&apikey=86637621';

  constructor(private http: HttpClient) {}
  getMovie() {
    this.movieDate = this.http.get(this.url)
    return this.movieDate;
  }
}
