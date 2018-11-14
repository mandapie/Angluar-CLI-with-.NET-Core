import { Injectable, Inject } from "@angular/core";
import { IMovie } from "./movie";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<IMovie[]>(baseUrl + 'api/Movies/GetMovies');
  }

  getMovies(): IMovie[] {
    return;
  }
}
