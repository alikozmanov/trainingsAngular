import { Component } from '@angular/core';
import { AuthService } from './services/auth.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public authService: AuthService) {} // Injecter (service) pour le rendre disponible dans un composant

  // Méthode pour gérer la déconnexion
  onLogout(): void {
    this.authService.logout();
  }
}
