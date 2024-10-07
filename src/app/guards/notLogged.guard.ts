import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../servicios/auth.service';

export const notLoggedGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  console.log(authService.isUserLoggedIn());
  // console.log(!authService.isLogged);
  if (!authService.isLogged) {
    return true; 
  } else {
    router.navigate(['/home']);
    return false; 
  }
};