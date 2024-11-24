import { Injectable } from '@angular/core';
import { EncryptionService } from './encryption.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users = [
    { email: 'elbab@gmail.com', password: '1234', roles: ['ADMIN', 'USER'] },
    { email: 'hugo@gmail.com', password: '1234', roles: ['USER'] },
  ];

  private currentUser: any = null;

  constructor(private encryptionService: EncryptionService) {
    // Récupérer l'utilisateur connecté
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = this.encryptionService.decryptData(storedUser);
    }
  }

  // Connexion de l'utilisateur
  login(email: string, password: string): boolean {
    const user = this.users.find((u) => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      // Enregistrer l'utilisateur crypté dans le localStorage
      const encryptedData = this.encryptionService.encryptData(this.currentUser);
      localStorage.setItem('currentUser', encryptedData);
      return true;
    }
    return false;
  }

  // Déconnexion
  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser'); // Retirer les données chiffrées
  }

  // Vérifie si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  // Récupérer l'utilisateur connecté
  getCurrentUser(): any {
    return this.currentUser;
  }
}
