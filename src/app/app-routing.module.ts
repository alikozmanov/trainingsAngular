import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrainingsComponent } from './components/trainings/trainings.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  { path: 'trainings', component: TrainingsComponent }, // Liste des formations
  { path: 'cart', component: CartComponent }, // Panier
  { path: '', redirectTo: 'trainings', pathMatch: 'full' }, // Redirection vers formations par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
