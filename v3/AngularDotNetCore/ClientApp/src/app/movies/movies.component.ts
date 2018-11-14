import { Component, Inject } from '@angular/core';
import { IMovie } from './movie';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})

export class MoviesComponent{
  info: string;
  imageWidth: number = 100;
  imageMargin: number = 2;
  seePoster: boolean = false;
  listFilter: string;
  movies: IMovie[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<IMovie[]>(baseUrl + 'api/Movies/GetMovies').subscribe(result => {
      this.movies = result;
    }, error => console.error(error));
  }

  toggleImage(): void {
    this.seePoster = !this.seePoster;
  }

  onRatingClicked(title, msg: string): void {
    this.info = title + " " + msg;
  }
}
