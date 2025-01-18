import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { navItems } from '../../constants';
import { NgFor } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [NgFor, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  private auth = inject(AuthService);
  private router = inject(Router);
  nav_item = navItems;

  isActive(route: string): boolean {
    const currentPath = this.router.url;
    return currentPath === route;
  }

  signOut(): void {
    if (window.confirm('Are you sure you want to sign out?')) {
      this.auth.logout();
    }
  }

  // ngOnInit(): void {
  //   const isLoggedIn = !!localStorage.getItem('currentUser');
  //   if (!isLoggedIn) {
  //     this.auth.navigateByURL('/login');
  //   }
  // }
}
