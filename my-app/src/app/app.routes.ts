import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((h) => h.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((a) => a.AboutComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./admin/admin.component').then((a) => a.AdminComponent),
  },
];
