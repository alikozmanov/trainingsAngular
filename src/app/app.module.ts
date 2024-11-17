import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CartComponent } from './components/cart/cart.component';

import { FormsModule } from '@angular/forms';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';


@NgModule({
  declarations: [
    // Déclaration des composants 
    AppComponent,
    TrainingsComponent,
    CartComponent,
    ConfirmationComponent,
  ],
  imports: [
     // Modules à importerr dans l'application
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
