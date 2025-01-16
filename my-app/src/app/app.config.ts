import {
  provideRouter,
  withPreloading,
  PreloadAllModules,
} from '@angular/router';
import { routes } from './app.routes';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
};
