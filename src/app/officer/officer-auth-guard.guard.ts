import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OfficerAuthService } from './services/officer-auth.service';

@Injectable({
  providedIn: 'root'
})
export class OfficerAuthGuardGuard implements CanActivate {
  constructor(private _authService:OfficerAuthService, private _router:Router)
  {}

  canActivate(): boolean
  {
    if(this._authService.OfficerLoggedIn())
    {
      return true;
    }
    else{
      this._router.navigate(['/officerlogin'])
      return false;
    }
  }
  
}
