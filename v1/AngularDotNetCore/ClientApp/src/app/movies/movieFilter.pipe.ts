import { Pipe, PipeTransform } from "@angular/core";
import { IMovie } from "./movie";

@Pipe({
  name: 'movieFilter'
})

export class MovieFilterPipe implements PipeTransform {
  transform(movie: IMovie[], query: string): IMovie[] {
    query = query ? query.toLocaleLowerCase() : null;
    return query ? movie.filter((m: IMovie) => { return m.title.toLocaleLowerCase().includes(query) }) : movie;
  }
}
