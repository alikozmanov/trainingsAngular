import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Training } from 'src/app/model/Training.model';
import { Router } from '@angular/router'; // Importer le service Router


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: Training[] = []; // Tableau pour stocker les éléments du panier

  constructor(private cartService: CartService, private router : Router) { }

  ngOnInit(): void {
    // Récupérer les éléments du panier au démarrage
    this.cartItems = this.cartService.getCartItems();
  }

  // Méthode pour supprimer un article du panier
  onRemoveFromCart(trainingId: number): void {
    this.cartService.removeTraining(trainingId);
    this.cartItems = this.cartService.getCartItems(); // Mettre à jour la liste après suppression
  }

  // Méthode pour calculer le total du panier
  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Méthode du bouton Commander
  onOrder(): void {
    if(this.cartItems.length > 0) {
      alert('Commande passée avec succès')
      this.router.navigate(['/confirmation'])
    }
  }
}
