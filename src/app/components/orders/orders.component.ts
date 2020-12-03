import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from './../../models/IMovie';
import { CartService } from './../../services/cart.service';
import { MovieService } from './../../services/movie.service';
import { IPostOrder } from './../../models/IPostOrder';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  cart: IMovie[] = [];

  order: IPostOrder = {
    companyId: 14062214,
    created: '',
    createdBy: '',
    paymentMethod: '',
    totalPrice: 0,
    status: 0,
    orderRows: [],
  };
  paymentMethods = [{ name: 'cardname', paymentMethod: 'cardname' }];

  constructor(
    private MovieService: MovieService,
    public CartService: CartService
  ) {}

  ngOnInit(): void {}

  deleteMovie(movie: IMovie) {
    const index = this.CartService.cart.indexOf(movie);
    this.CartService.cart.splice(index, 1);
    this.CartService.sendNumber(this.CartService.cart.length);
  }

  orderMovie(): void {
    console.log('orderMovie was pressed');
    this.order = {
      ...this.order,
      created: new Date().toISOString(),
      companyId: 4004,
      createdBy: 'me',
      paymentMethod: 'MasterCard',
      orderRows: this.CartService.cart.map((movie, idx) => {
        return {
          productId: movie.id,
          amount: 1,
        };
      }),
    };
    this.MovieService.postMovies(this.order);
    console.log(this.order);
  }
}
