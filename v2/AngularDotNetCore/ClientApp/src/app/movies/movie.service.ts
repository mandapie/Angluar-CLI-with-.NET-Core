import { Injectable } from "@angular/core";
import { IMovie } from "./movie";

@Injectable()
export class MovieService {
  getMovies(): IMovie[] {
    return [
      {
        "movieId": 1,
        "title": "Titanic",
        "star": "DiCaprio",
        "releaseDate": "11/12/2018",
        "price": 16,
        "rating": 4.2,
        "imageUrl": "https://images.unsplash.com/photo-1500077423678-25eead48513a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8589a7586b5d6489f8c0d461863eeb29&auto=format&fit=crop&w=1050&q=80"
      },
      {
        "movieId": 2,
        "title": "Toy Story",
        "star": "Toys",
        "releaseDate": "11/12/2018",
        "price": 15,
        "rating": 4.5,
        "imageUrl": "https://images.unsplash.com/photo-1531214159280-079b95d26139?ixlib=rb-0.3.5&s=1f154cfefa736a5900f5e4dc10ca264c&auto=format&fit=crop&w=1950&q=80"
      }
    ];
  }
}
