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

  removeTraining(trainingId: number): void {
    const cartItems = this.getCartItems().filter(item => item.id !== trainingId);
    this.saveCart(cartItems);
  }

  clearCart(): void {
    localStorage.removeItem(this.storageKey);
  }

  private saveCart(cartItems: Training[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(cartItems));
  }

  // Gestion des informations client
  getCustomer(): any {
    const customer = localStorage.getItem(this.customerKey);
    return customer ? JSON.parse(customer) : { name: '', firstName: '', address: '', phone: '', email: '' };
  }

  saveCustomer(customer: any): void {
    localStorage.setItem(this.customerKey, JSON.stringify(customer));
  }

  clearCustomer(): void {
    localStorage.removeItem(this.customerKey);
  }
}



