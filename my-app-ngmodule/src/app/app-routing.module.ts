import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
