import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from '../admin/services/admin-auth.service';
import { OfficerAuthService } from '../officer/services/officer-auth.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  somthingWrong:boolean=false;
  LoginForm:FormGroup;
  EmailWrongError=false;
  PasswordWrongError=false;

  constructor(private _auth:AuthService, private _router:Router, private _adminAuth:AdminAuthService, private _officrAuth:OfficerAuthService) { }

  closeDangerAlert()
  {
      this.somthingWrong=false;
  }

  ngOnInit(): void 
  {
    this.LoginForm=new FormGroup
    (
          {
              'Email':new FormControl(null,[Validators.required,Validators.email]),
              'Password':new FormControl(null,Validators.required),
          
          }
    );
  }

  onLoginSubmit()
  {
    if(this.LoginForm.valid)
    {
         this._auth.loginUser(this.LoginForm.value).subscribe
         (
             res=>
                 {    
                   
                    this.somthingWrong=false; 
                    localStorage.setItem('User Token',res['token']);
                    localStorage.setItem('User Email',res['email']);
                    this.LoginForm.reset();
                    this._adminAuth.logoutAdmin();
                    this._officrAuth.logoutOfficer();
                    this._router.navigate(['/dashboard'])
                    
                 },
             err=>{

                  if(err.status==400)
                      this.EmailWrongError=true
                  if(err.status==401)
                      this.PasswordWrongError=true
                  if(err.status==404)
                      this.somthingWrong=true;
                  console.log(err)
                 }
         )    
     }
     else
     {
         this.LoginForm.get('Email').markAsTouched();
         this.LoginForm.get('Password').markAsTouched();
         return;
     }
  }
}