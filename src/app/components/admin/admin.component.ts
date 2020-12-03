import { Component, OnInit } from '@angular/core';
import { IOrder } from 'src/app/models/IPostOrder';
import { MovieService } from './../../services/movie.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
orders:IOrder[];

  constructor(private Movieservice: MovieService,) { }

  ngOnInit(): void {
    this.Movieservice.orders$.subscribe((orders) => {
      this.orders = orders;
    });
    this.Movieservice.getOrders();
  }

}
