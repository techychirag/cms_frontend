import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AdminAuthService } from './admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdmTokenIntercepterService implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req, next)
  {
          let authService =this.injector.get(AdminAuthService);
          let tokenizedReq=req.clone({
            setHeaders:{
              Authorization:'Bearear '+authService.getToken()
              
            }
          })
          console.log("Admin toke :"+authService.getToken())

          return next.handle(tokenizedReq);
  }
}