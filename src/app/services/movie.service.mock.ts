import { Subject } from 'rxjs';
import { IMovieService} from './movie.service';
import { IMovie } from './../models/IMovie';

export default class MovieServiceMock implements IMovieService {
  movies = new Subject<IMovie[]>();
  movies$ = this.movies.asObservable();

  getMovies(): void {
 
  }
}
