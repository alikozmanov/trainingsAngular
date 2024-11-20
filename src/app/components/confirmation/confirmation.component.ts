import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {

  customer: any = {}; // Stocker les informations client

  constructor(public cartService: CartService, private router : Router) { }

  ngOnInit(): void {
    // Charger les informations du client à partir du service
    this.customer = this.cartService.getCustomer();
  }

  onSaveCustomer(formData: any): void {
    this.cartService.saveCustomer(formData); // Sauvegarde via le service
    console.log('Customer saved:', formData);
    alert('Informations client enregistrées avec succès');
  }
}
