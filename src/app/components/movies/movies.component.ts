import { Component, OnInit } from '@angular/core';
import { IMovie } from './../../models/IMovie';
import { MovieService } from 'src/app/services/movie.service';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: IMovie[] = [];

  addedMovies: IMovie = { id: 0, name: '', imageUrl: '', price: 0 };

  constructor(
    private Movieservice: MovieService,
    public CartService: CartService
  ) {}

  ngOnInit() {
    this.Movieservice.movies$.subscribe((movies) => {
      this.movies = movies;
    });
    this.Movieservice.getMovies();

    this.CartService.counter$.subscribe((num) => {
      this.CartService.numberInToComponent = num;
      this.CartService.cart.length = this.CartService.numberInToComponent;
    });
  }
  toCartService(movie): void {
    this.CartService.cart.push(movie);
    console.log(this.CartService.cart);
    this.addedMovies = movie; //namn på filmen som läggs till cart
    this.CartService.sendNumber(this.CartService.cart.length);
  }
}
