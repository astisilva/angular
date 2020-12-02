import { Injectable } from '@angular/core';
import { IMovie } from './../models/IMovie';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  movies: IMovie[] = [];

  //CART
  /*   private cart = new Subject<IMovie>();
  cart$ = this.cart.asObservable(); */
  cart: IMovie[] = [];
  //RÄKNARE
  private counter = new Subject<number>();
  counter$ = this.counter.asObservable();
  numberInToComponent = 0;
  constructor() {}

  sendNumber(theNumber: number) {
    this.counter.next(theNumber);
  }
}
