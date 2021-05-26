import { HttpInterceptor } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
import { AdminAuthService } from '../admin/services/admin-auth.service';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }

  intercept(req, next)
  {
      var url:String=req.url
      //url.split('/')[1]=="login"
      console.log(url.split('/')[3])
      if(url.split('/')[3]!="admlogin" && url.split('/')[3]!="admdash" && url.split('/')[3]!="officerlogin" && url.split('/')[3]!="officerdash" && url.split('/')[3]!="complaintregistry" && url.split('/')[3]!="officercomplaintstatus" && url.split('/')[3]!="officergetcomplaints" && url.split('/')[3]!="users" && url.split('/')[3]!="user")
      {  
          let authService =this.injector.get(AuthService);
            let tokenizedReq=req.clone({
              setHeaders:{
                Authorization:'Bearear '+authService.getToken()
              }
            })
            console.log("User Token :"+authService.getToken())
            return next.handle(tokenizedReq);
      }
      else
      {
        return next.handle(req);
      }

  }
}

