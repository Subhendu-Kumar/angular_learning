import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './pages/dashboard/dashboard-home/dashboard-home.component'
          ).then((c) => c.DashboardHomeComponent),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./pages/dashboard/reports/reports.component').then(
            (c) => c.ReportsComponent
          ),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/dashboard/projects/projects.component').then(
            (c) => c.ProjectsComponent
          ),
      },
    ],
  },
];
