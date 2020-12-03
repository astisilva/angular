import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/IMovie';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  constructor(private cartService: CartService) {}
  cart: IMovie[];
  ngOnInit(): void {
    this.cart = this.cartService.cart;
    console.log(this.cart);
  }
  clearCart(): void {
    this.cartService.cart = [];
  }
}
