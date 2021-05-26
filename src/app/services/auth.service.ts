
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registration_URL="api/register";
  private login_URL="api/login";
  private postComplaint_URL="api/complaint";
  private getUser_URL="api/userprofile/"
  private UserUpdate_URL="api/updateuser/"

  constructor(private http:HttpClient,private router:Router) { }

  postComplaint(complaint)
  {
    return this.http.post(this.postComplaint_URL,complaint,{responseType: 'text'})
  }
  registerUser(user)
  {
    return this.http.post(this.registration_URL,user, {responseType: 'text' });
    
  }
  loginUser(user)
  {
    //return this.http.post(this.login_URL,user, {responseType: 'text' });
    return this.http.post(this.login_URL,user);
  }

  loggedIn()
  {
    //return true if token exist or returns false
    return !!localStorage.getItem('User Token');
  }
  getToken()
  {
    return localStorage.getItem('User Token')
  }

  getUser(email)
  {
    return this.http.get(this.getUser_URL+email)
  }



  updateUser(data)
  {
    return this.http.patch(this.UserUpdate_URL+data._id,data)
  }


  logoutUser()
  {
    localStorage.removeItem('User Token');
    localStorage.removeItem('User Email');
    this.router.navigate(['/login']) 
  }

}
