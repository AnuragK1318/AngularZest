import { CanActivateFn, Router } from '@angular/router';
import { inject, Inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router=inject(Router);

  const isLoggeedIn=false;
  if(isLoggeedIn)
  {
    return true;
  }else{
    alert('Access Denied!!');
    router.navigate(['/home'])
    return false
  }
};
