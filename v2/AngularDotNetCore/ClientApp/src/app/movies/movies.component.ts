import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html'
})

export class MoviesComponent implements OnInit{
  info: string;
  imageWidth: number = 100;
  imageMargin: number = 2;
  seePoster: boolean = false;
  listFilter: string;
  movies: IMovie[];

  ngOnInit(): void {
    this.movies = this._movieService.getMovies();
  }

  constructor(private _movieService: MovieService) { }

  toggleImage(): void {
    this.seePoster = !this.seePoster;
  }

  onRatingClicked(title, msg: string): void {
    this.info = title + " " + msg;
  }
}
