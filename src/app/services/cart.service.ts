import { Injectable } from '@angular/core';
import { Training } from 'src/app/model/Training.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Training[] = []; // Tableau pour stocker les éléments ajoutés

  constructor() { }

  // Méthode pour ajouter une formation au panier
  addTraining(training: Training): void {
    this.cart.push(training);
    console.log(`${training.name} a été ajouté au panier.`);// Affiche un message dans la console pour confirmation
  }

  // Méthode pour récupérer les éléments du panier
  getCartItems(): Training[] {
    return this.cart;
  }

  // Méthode pour supprimer une formation du panier
  removeTraining(trainingId: number): void {
    this.cart = this.cart.filter(item => item.id !== trainingId); // // Supprime la formation avec l'ID 'trainingId' du panier
    console.log(`Formation avec ID ${trainingId} a été supprimée du panier.`); // // Affiche un message avec l'ID de la formation supprimée
  }
}
