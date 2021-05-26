import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OfficerAuthService {

  Officer_Registration_URL="api/officer_register"
  Officer_Login_URL="api/officer_login"
  Officer_Dash_URL="api/officerdash"
  constructor(private http:HttpClient, private router:Router) { }


  getDashboard()
  {
    return this.http.get(this.Officer_Dash_URL)
  }


  loginOfficer(officer)
  {
    
    return this.http.post(this.Officer_Login_URL,officer);
  }

  OfficerLoggedIn()
  {
    //return true if token exist or returns false
    return !!localStorage.getItem('Officer Token');
  }
  logoutOfficer()
  {
    localStorage.removeItem('Officer Token');
    localStorage.removeItem('Officer Email');
    this.router.navigate(['/officerlogin']) 
  }
  getToken()
  {
    return localStorage.getItem('Officer Token')
  }





  registerOfficer(officer)
  {
    return this.http.post(this.Officer_Registration_URL,officer, {responseType: 'text' });
  }
}
