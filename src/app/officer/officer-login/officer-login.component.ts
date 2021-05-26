import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from 'src/app/admin/services/admin-auth.service';
import { AuthService } from 'src/app/services/auth.service';
import { Department } from '../officer-register/Department';
import { Location } from '../officer-register/Location';
import { OfficerAuthService } from '../services/officer-auth.service';

@Component({
  selector: 'app-officer-login',
  templateUrl: './officer-login.component.html',
  styleUrls: ['./officer-login.component.css']
})
export class OfficerLoginComponent implements OnInit {

  constructor(private _auth:OfficerAuthService, private _router:Router, private _adminAuth:AdminAuthService,private _userAuth:AuthService) { }

  somthingWrong:boolean=false;
  OfficerLoginForm:FormGroup;


  Locations:Location[];
  Departments:Department[];

  LocationSelected:any;
  DepartmentSelected:any;
  closeDangerAlert()
  {
      this.somthingWrong=false;
  }

  ngOnInit(): void 
  {

    this.Locations=[
      {Id:1,Name:"Ahmedabad"},
      {Id:2,Name:"Mumbai"},
      {Id:3,Name:"New Delhi"},
      {Id:4,Name:"Noida"},
      {Id:5,Name:"Goa"},
      {Id:6,Name:"Pune"},
    ]

    this.Departments=[
      {Id:1,Name:"Street Light"},
      {Id:2,Name:"Pipe Leakage"},
      {Id:3,Name:"Rain Water"},
      {Id:4,Name:"Garbage"},
    ]
    this.OfficerLoginForm=new FormGroup
    (
          {
              'Email':new FormControl(null,[Validators.required,Validators.email]),
              'Password':new FormControl(null,Validators.required),
              'Location':new FormControl(null,[Validators.required]),
              'Department':new FormControl(null,[Validators.required])
          }
    );
  }


  onChangeLocation(event): void 
  { 
    this.LocationSelected= event.target.value;
    if(this.LocationSelected == 'null')
    {
      this.OfficerLoginForm.controls['Location'].setErrors({ invalid: true });
    }
  }

  onChangeDepartment(event): void 
  { 
    this.DepartmentSelected= event.target.value;
    if(this.DepartmentSelected == 'null')
    {
      this.OfficerLoginForm.controls['Department'].setErrors({ invalid: true });
    }
  }

  onOfficerLoginSubmit()
  {
    if(this.OfficerLoginForm.valid)
    {
 
        var OfficerData={}
        OfficerData={
          "Email":this.OfficerLoginForm.value.Email,
          "Password":this.OfficerLoginForm.value.Password,
          "Location":this.Locations[(this.OfficerLoginForm.value.Location)-1].Name,
          "Department":this.Departments[(this.OfficerLoginForm.value.Department)-1].Name
        }
     
         this._auth.loginOfficer(OfficerData).subscribe
         (
             res=>{
                 
              localStorage.setItem('Officer Token',res['token']);
              localStorage.setItem('Officer Email',res['email']);
              localStorage.setItem('Officer Department',res['department']);
              localStorage.setItem('Officer Location',res['location']);
              this.OfficerLoginForm.reset();
              this._adminAuth.logoutAdmin();
              this._userAuth.logoutUser();
              this._router.navigate(['/officer-dashboard'])
                 },
             err=>{
                   
                     this.somthingWrong=true;
                     console.log(err)
                 }
         )    
     }
     else
     {
         this.OfficerLoginForm.get('Name').markAsTouched();
         this.OfficerLoginForm.get('Password').markAsTouched();
         this.OfficerLoginForm.get('Location').markAsTouched();
         this.OfficerLoginForm.get('Department').markAsTouched();
         return;
     }
  }

}
