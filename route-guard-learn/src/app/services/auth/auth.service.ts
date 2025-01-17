import { inject, Injectable } from '@angular/core';
import { roles, User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'admin@example.com',
      password: 'admin123',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'user@example.com',
      password: 'user123',
      role: 'USER',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'manager@example.com',
      password: 'manager123',
      role: 'MANAGER',
    },
  ];
  private currentUser: User | null = null;
  private router = inject(Router);

  login(email: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      this.currentUser = user;
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.navigateByURL('/login');
  }

  getCurrentUser(): User | null {
    if (!this.currentUser) {
      const user = localStorage.getItem('currentUser');
      if (user) {
        this.currentUser = JSON.parse(user) as User;
      }
    }
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return !!this.getCurrentUser();
  }

  hasRole(role: roles): boolean {
    return this.getCurrentUser()?.role === role;
  }

  navigateByURL(url: string): void {
    this.router.navigateByUrl(url, { replaceUrl: true });
  }
}
