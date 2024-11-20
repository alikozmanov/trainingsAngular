import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { ModalOrderComponent } from './components/order/modal-order/modal-order.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    CartComponent,
    ConfirmationComponent,
    OrderComponent,
    ModalOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

