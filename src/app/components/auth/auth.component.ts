import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  // Méthode qui s'exécute lors de la soumission du formulaire
  onSubmit(): void {
    const { email, password } = this.loginForm.value;

    if (this.authService.login(email, password)) {
      this.errorMessage = null;

      const redirectTo = this.route.snapshot.queryParamMap.get('redirectTo') || '/trainings';

      alert('Connexion réussie !');
      this.router.navigate([redirectTo]); // Redirige l'utilisateur
    } else {
      this.errorMessage = 'Email ou mot de passe invalide 😞';
    }
  }

  // Méthode de déconnexion
  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['/auth']); 
  }
}
