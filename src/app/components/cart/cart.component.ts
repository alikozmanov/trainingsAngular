import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Training } from 'src/app/model/Training.model';
import { Router } from '@angular/router'; 
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Training[] = [];

   // Injection des services 
  constructor(
    private cartService: CartService, 
    private router: Router, 
    private authService: AuthService
  ) { }

   // Méthode appelée au démarrage du composant
  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/auth']); 
    } else {
      this.cartItems = this.cartService.getCartItems(); 
    }
  }

   // Méthode appelée pour supprimer
  onRemoveFromCart(trainingId: number): void {
    this.cartService.removeTraining(trainingId);
    this.cartItems = this.cartService.getCartItems();
  }

  // Méthode pour calculer 
  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Méthode appelée lors de la commande (achat)
  onOrder(): void {
    if (this.cartItems.length > 0) {
      alert('Commande passée avec succès');
      this.router.navigate(['/confirmation']);
    }
  }
}
