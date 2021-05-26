import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OfficerAuthService } from 'src/app/officer/services/officer-auth.service';
import { AuthService } from '../../services/auth.service';
import { AdminAuthService } from '../services/admin-auth.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {

  somthingWrong:boolean=false;
  AdminLoginForm:FormGroup;
  constructor(private _router:Router, private _auth:AdminAuthService, private _userAuth:AuthService,  private _officerAuth:OfficerAuthService) { }

  closeDangerAlert()
  {
      this.somthingWrong=false;
  }
  ngOnInit(): void 
  {
    this.AdminLoginForm=new FormGroup
    (
          {
              'Email':new FormControl(null,[Validators.required,Validators.email]),
              'Password':new FormControl(null,Validators.required),
          
          }
    );
  }



  onLoginSubmit()
  {
    if(this.AdminLoginForm.valid)
    {
         this._auth.adminLogin(this.AdminLoginForm.value).subscribe
         (
             res=>
                 {    
                   
                    this.somthingWrong=false; 
                    localStorage.setItem('Admin Token',res['token']);
                    localStorage.setItem('Admin Email',res['email']);
                    this.AdminLoginForm.reset();
                    this._userAuth.logoutUser()
                    this._officerAuth.logoutOfficer()
                    this._router.navigate(['/admdashboard'])
                    
                 },
             err=>{
                    this.somthingWrong=true;
                    console.log(err)
                 }
         )    
     }
     else
     {
         this.AdminLoginForm.get('Email').markAsTouched();
         this.AdminLoginForm.get('Password').markAsTouched();
         return;
     }
  }

}
