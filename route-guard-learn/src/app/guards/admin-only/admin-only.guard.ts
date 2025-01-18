import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

export const adminOnlyGuard: CanMatchFn = (route, segments) => {
  const auth = inject(AuthService);
  if (auth.hasRole('ADMIN')) {
    return true;
  } else {
    const confirmed = confirm('Logout and relogin as a admin to access!!');
    if (confirmed) {
      auth.logout();
    }
    return false;
  }
};
