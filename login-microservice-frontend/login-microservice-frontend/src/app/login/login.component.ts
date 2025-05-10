import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.error = '';
    this.auth.login(this.email, this.password).subscribe({
      next: (res) => {
        window.location.href =
          'https://bookserviceassignment-dacjfqd8g8byawhr.southindia-01.azurewebsites.net/';
      },
      error: (err) => {
        this.error = err.error?.message || 'Login failed';
      },
    });
  }
}
