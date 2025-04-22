import { CanActivateFn } from '@angular/router';

export const securityguardGuard: CanActivateFn = (route, state) => {
  return true;
};
