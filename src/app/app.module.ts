import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { OrdersComponent } from './components/orders/orders.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetailsComponent } from './components/details/details.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    OrdersComponent,
    PageNotFoundComponent,
    DetailsComponent,
    CheckoutComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
