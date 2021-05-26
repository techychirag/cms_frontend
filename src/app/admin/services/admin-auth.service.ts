import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private http:HttpClient,private router:Router) { }
  admin_login_URL="api/admlogin"
  adminLogin(admin)
  {
    return this.http.post(this.admin_login_URL,admin);
    //return this.http.post(this.admin_login_URL,admin, {responseType: 'text' });
  }
  adminLoggedIn()
  {
    //return true if token exist or returns false
    return !!localStorage.getItem('Admin Token');
  }
  logoutAdmin()
  {
    localStorage.removeItem('Admin Token');
    localStorage.removeItem('Admin Email');
    this.router.navigate(['/login']) 
  }
  getToken()
  {
    return localStorage.getItem('Admin Token')
  }


}
