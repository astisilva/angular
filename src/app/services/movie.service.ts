import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IMovie } from './../models/IMovie';
import { IOrder, IPostOrder } from './../models/IPostOrder';
import { catchError } from 'rxjs/operators';

export interface IMovieService {
  getMovies(): void;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
   orders = new Subject<IOrder[]>();
  orders$ = this.orders.asObservable();

  movies = new Subject<IMovie[]>();
  movies$ = this.movies.asObservable();

  constructor(private http: HttpClient) {}

  getMovies(): void {
    this.http
      .get(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/products'
      )
      .subscribe((movies: IMovie[]) => {
        this.movies.next(movies);
        console.log(movies);
      });
  }

  postUrl = 'https://medieinstitutet-wie-products.azurewebsites.net/api/orders';

  httpOptions = { headers: { 'Content-Type': 'application/json' } };

  postMovies(order: IPostOrder) {
    const response: Observable<IPostOrder> = this.http.post<IPostOrder>(
      this.postUrl,
      order,
      this.httpOptions
    );
    response.subscribe();
  }

  getOrders() {
    this.http
      .get(
        'https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=4004'
      )
      .subscribe((orders: IOrder[]) => {
        this.orders.next(orders);
        console.log(orders);
      });
  }
}
