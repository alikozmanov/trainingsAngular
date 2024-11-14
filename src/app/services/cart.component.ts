import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Training } from '../model/Training.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})


export class TrainingsComponent implements OnInit {
  cartItems: Training[] = [];
  constructor(private cartService: CartService) { 

  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  // Méthode pour supprimer un article du panier
  onRemoveFromCart(trainingId: number): void {
    this.cartService.removeTraining(trainingId);
    this.cartItems = this.cartService.getCartItems(); // Mettre à jour la liste après suppression
  }
}