import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from './movie';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movieDetail',
  templateUrl: './movieDetail.component.html'
})

export class MovieDetailComponent {
  movie: IMovie;
  param1: string;
  errorMessage: string;

  constructor(http: HttpClient, private router: Router, private route: ActivatedRoute, @Inject('BASE_URL') baseUrl: string) {
    this.route.queryParams.subscribe(params => {
      this.param1 = this.route.snapshot.paramMap.get('id');
    });

    http.get<IMovie>(baseUrl + 'api/Movies/MovieDetail?id=' + this.param1 ).subscribe(result => {
      this.movie = result;
    }, error => console.error(error));
  }

  onBack(): void {
    this.router.navigate(['/movies']);
  }
}
