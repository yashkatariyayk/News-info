import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerslistComponent } from './customers/customerslist/customerslist.component';
import { OrderslistComponent } from './orders/orderslist/orderslist.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    OrdersComponent,
    CustomerslistComponent,
    OrderslistComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
