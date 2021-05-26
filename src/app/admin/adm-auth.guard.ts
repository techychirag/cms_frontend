import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { AdminAuthService } from './services/admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdmAuthGuard implements CanActivate {
  constructor(private _authService:AdminAuthService, private _router:Router)
  {}

  canActivate(): boolean
  {
    if(this._authService.adminLoggedIn())
    {
      return true;
    }
    else{
      this._router.navigate(['/admlogin'])
      return false;
    }
  }
  
}
