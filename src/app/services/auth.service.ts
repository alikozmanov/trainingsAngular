import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { email: 'elbab@gmail.com', password: '1234', roles: ['ADMIN', 'USER'] },
    { email: 'hugo@gmail.com', password: '1234', roles: ['USER'] },
  ];

  private currentUser: any = null;

  constructor() {
    // Récupérer l'utilisateur connecté 
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
    }
  }

  // Vérifie si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  // Connexion de l'utilisateur
  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.currentUser = user;
      // Enregistrer l'utilisateur dans le localStorage
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      return true;
    }
    return false;
  }

  // Récupérer l'utilisateur connecté
  getCurrentUser(): any {
    return this.currentUser;
  }

  // Déconnexion
  logout(): void {
    this.currentUser = null;
    // Retirer l'utilisateur 
    localStorage.removeItem('currentUser');
  }

  // Vérifie si l'utilisateur est connecté
  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }
}
