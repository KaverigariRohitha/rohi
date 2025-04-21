import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';

export const securityguardGuard: CanActivateFn = (route, state) => {

  if(sessionStorage.getItem("uname")==null)
  {
    const r= Inject(Router);
    r.navigate(['login']);
    return false;
  }
  else
  {
    return true;
  }
}
