import { Injectable } from '@angular/core';
import { Training } from 'src/app/model/Training.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // Map pour stocker les formations par ID
  private trainingsMap = new Map<number, Training>();

  constructor() { }

  // Méthode pour ajouter une formation au panier
  addTraining(training: Training): void {
    this.trainingsMap.set(training.id, training); // Ajoute la formation à la Map avec son ID
    console.log(`${training.name} a été ajouté au panier.`); 
  }

  // Méthode pour récupérer les éléments du panier
  getCartItems(): Training[] {
    // Retourne un tableau des valeurs de la Map (les formations)
    return Array.from(this.trainingsMap.values());
  }

  // Méthode pour supprimer une formation du panier
  removeTraining(trainingId: number): void {
    this.trainingsMap.delete(trainingId); // Supprime la formation avec l'ID 'trainingId' de la Map
    console.log(`Formation avec ID ${trainingId} a été supprimée du panier.`); 
  }
}

