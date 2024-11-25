import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service'; // Assurez-vous d'importer le service d'authentification

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  order: any = {}; 
  dateOrder: Date = new Date();
  showModal = false;
  modalTitle = 'Commande confirmée';
  modalContent = 'Votre commande a bien été prise en compte, merci de nous avoir donné : ';
  modalData: any;
  cartItems: any[] = []; // Ajout de la propriété pour stocker les articles du panier

  constructor(
    private cartService: CartService, 
    private router: Router, 
    private authService: AuthService // Injection du service d'authentification
  ) {}


  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/auth']); 
    } else {
      this.cartItems = this.cartService.getCartItems(); 
      this.order = this.cartService.getOrder();
    }
  }

  // Méthode appelée lorsque l'utilisateur confirme la commande
  onOrder(): void {
    this.modalData = this.cartService.getAmount();
    this.showModal = true;
  }

  // Méthode appelée lorsque l'utilisateur ferme la fenêtre modale
  onModalClose(): void {
    this.showModal = false;
    this.cartService.clear();
    this.router.navigateByUrl('');
    console.log("Back to the future !");
  }
}
