import { Routes } from '@angular/router';
import { authGuard } from './guards/auth/auth.guard';
import { roleGuard } from './guards/role/role.guard';
import { unsavedChangesGuard } from './guards/unsaved-changes/unsaved-changes.guard';
import { adminOnlyGuard } from './guards/admin-only/admin-only.guard';

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
    canActivate: [authGuard],
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
        canActivateChild: [roleGuard],
        data: { role: 'MANAGER' },
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./pages/dashboard/projects/projects.component').then(
                (c) => c.ProjectsComponent
              ),
          },
          {
            path: 'edit/:id',
            loadComponent: () =>
              import(
                './pages/dashboard/projects/edit-project/edit-project.component'
              ).then((c) => c.EditProjectComponent),
            canDeactivate: [unsavedChangesGuard],
          },
        ],
      },
    ],
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./pages/settings/settings.component').then(
        (c) => c.SettingsComponent
      ),
    canMatch: [adminOnlyGuard],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-exist/not-exist.component').then(
        (c) => c.NotExistComponent
      ),
  },
];
