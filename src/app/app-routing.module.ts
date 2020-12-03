import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsComponent } from './components/details/details.component';
import { MoviesComponent } from './components/movies/movies.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AdminComponent } from './components/admin/admin.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: 'movies/:id', component: DetailsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '', redirectTo: 'movies', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
