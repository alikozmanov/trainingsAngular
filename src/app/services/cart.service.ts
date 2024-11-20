import { Injectable } from '@angular/core';
import { Training } from '../model/Training.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'cartItems';
  private customerKey = 'customerInfo'; // Nouvelle clé pour les informations client

  constructor() { }

  // Gestion des éléments du panier
  getCartItems(): Training[] {
    const items = localStorage.getItem(this.storageKey);
    return items ? JSON.parse(items) : [];
  }

  // Ajouter un élément au panier
  addTraining(training: Training): void {
    const cartItems = this.getCartItems();
    const existingItem = cartItems.find(item => item.id === training.id);

    if (existingItem) {
      existingItem.quantity = training.quantity; // Ecrase la valeur existante dans quantité
    } else {
      cartItems.push({ ...training });
    }

    this.saveCart(cartItems);
  }

   // Supprimer un élément du panier par son ID
  removeTraining(trainingId: number): void {
    const cartItems = this.getCartItems().filter(item => item.id !== trainingId);
    this.saveCart(cartItems);
  }

  // Effacer tous les éléments du panier
  clearCart(): void {
    localStorage.removeItem(this.storageKey);
  }

   // Sauvegarder les éléments du panier 
  private saveCart(cartItems: Training[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(cartItems));
  }

  // Récupérer les informations du client 
  getCustomer(): any {
    const customer = localStorage.getItem(this.customerKey);
    return customer ? JSON.parse(customer) : { name: '', firstName: '', address: '', phone: '', email: '' };
  }

  // Sauvegarder les informations du client 
  saveCustomer(customer: any): void {
    localStorage.setItem(this.customerKey, JSON.stringify(customer));
  }

  // Effacer les informations du client 
  clearCustomer(): void {
    localStorage.removeItem(this.customerKey);
  }

  // Récupérer les informations de la commande (client + items du panier)
  getOrder(): any {
    const customer = this.getCustomer(); 
    const cart = this.getCartItems(); 
    return { customer, cart }; 
  }

  // Calculer le montant total de la commande (quantité totale des éléments)
  getAmount(): number {
    const cartItems = this.getCartItems();
    return cartItems.reduce((total, item) => total + (item.quantity || 0), 0);
  }
  
  // Effacer toutes les données (panier et client)
  clear(): void {
    this.clearCart();
    this.clearCustomer();
  }
  
}



