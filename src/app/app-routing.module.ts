// Gère la navigation entre les pages via des URL
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CartComponent } from './components/cart/cart.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { OrderComponent } from './components/order/order.component';
import { AuthComponent } from './components/auth/auth.component';


const routes: Routes = [
  { path: 'trainings', component: TrainingsComponent }, // Liste des formations
  { path: 'cart', component: CartComponent }, // Panier
  { path: 'confirmation', component: ConfirmationComponent }, // Confirmation de commande
  { path: 'order', component: OrderComponent }, // Aperçu de la commande
  { path: 'auth', component: AuthComponent }, // Authentification
  { path: '', redirectTo: 'trainings', pathMatch: 'full' }, // Redirection vers formations par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
