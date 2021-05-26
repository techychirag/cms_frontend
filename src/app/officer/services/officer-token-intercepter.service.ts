import { HttpInterceptor } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { OfficerAuthService } from './officer-auth.service';

@Injectable({
  providedIn: 'root'
})
export class OfficerTokenIntercepterService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req, next)
  {
    var url:String=req.url
    if(url.split('/')[3]!="admlogin" && url.split('/')[3]!="admdash" && url.split('/')[3]!="complaints" && url.split('/')[3]!="users" && url.split('/')[3]!="user")
    {  
        let authService =this.injector.get(OfficerAuthService);
          let tokenizedReq=req.clone({
            setHeaders:{
              Authorization:'Bearear '+authService.getToken()
            }
          })
          return next.handle(tokenizedReq);
    }
    else
    {
      return next.handle(req);
    }
  }
}
