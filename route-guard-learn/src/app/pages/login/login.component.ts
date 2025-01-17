import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private auth = inject(AuthService);
  model: any = {};

  ngOnInit(): void {
    const isLoggedIn = !!localStorage.getItem('currentUser');
    if (isLoggedIn) {
      this.auth.navigateByURL('/dashboard');
    }
  }

  submitForm(form: NgForm): void {
    console.log(form);
    const isUser = this.auth.login(form.value.email, form.value.password);
    if (isUser) {
      this.auth.navigateByURL('/dashboard');
    } else {
      alert('inavlid credentials check and enter correctly');
      form.resetForm();
    }
  }
}
