import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OfficerAuthService } from '../services/officer-auth.service';
import { Department } from './Department';
import { Location } from './Location';

@Component({
  selector: 'app-officer-register',
  templateUrl: './officer-register.component.html',
  styleUrls: ['./officer-register.component.css']
})
export class OfficerRegisterComponent implements OnInit {

  constructor(private _auth:OfficerAuthService) { }
  RegSuccess:boolean=false;
  somthingWrong:boolean=false;

  OfficerRegisterForm:FormGroup;

  Locations:Location[];
  Departments:Department[];

  LocationSelected:any;
  DepartmentSelected:any;
  closeSuccessAlert()
  {
      this.RegSuccess=false;
  }
  closeDangerAlert()
  {
      this.somthingWrong=false;
  }
  ngOnInit(): void {


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



    this.OfficerRegisterForm=new FormGroup({

                'Name':new FormControl(null,Validators.required),               
                'Email':new FormControl(null,[Validators.required,Validators.email]),
                'Password':new FormControl(null,[Validators.required,Validators.minLength(5)]),
                'MobileNumber':new FormControl(null,[Validators.required]),
                'Location':new FormControl(null,[Validators.required]),
                'Department':new FormControl(null,[Validators.required])
    })
  }

  onChangeLocation(event): void 
  { 
    this.LocationSelected= event.target.value;
    if(this.LocationSelected == 'null')
    {
      this.OfficerRegisterForm.controls['Location'].setErrors({ invalid: true });
    }
  }

  onChangeDepartment(event): void 
  { 
    this.DepartmentSelected= event.target.value;
    if(this.DepartmentSelected == 'null')
    {
      this.OfficerRegisterForm.controls['Department'].setErrors({ invalid: true });
    }
  }
  onOfficerRegisterSubmit()
  {
    if(this.OfficerRegisterForm.valid)
   {

    var OfficerData={}
    OfficerData={
      "Name":this.OfficerRegisterForm.value.Name,
      "Email":this.OfficerRegisterForm.value.Email,
      "Password":this.OfficerRegisterForm.value.Password,
      "MobileNumber":this.OfficerRegisterForm.value.MobileNumber,
      "Location":this.Locations[(this.OfficerRegisterForm.value.Location)-1].Name,
      "Department":this.Departments[(this.OfficerRegisterForm.value.Department)-1].Name
    }
    
        this._auth.registerOfficer(OfficerData).subscribe
        (
            res=>{
                this.RegSuccess=true; 
                this.somthingWrong=false;
                    this.OfficerRegisterForm.reset();
                    console.log(res)
                },
            err=>{
                    this.RegSuccess=false; 
                    this.somthingWrong=true;
                    console.log(err)
                }
        )    
    }
    else
    {
        this.OfficerRegisterForm.get('Name').markAsTouched();
        
        this.OfficerRegisterForm.get('Email').markAsTouched();
        this.OfficerRegisterForm.get('Password').markAsTouched();
        this.OfficerRegisterForm.get('MobileNumber').markAsTouched();
        this.OfficerRegisterForm.get('Location').markAsTouched();
        this.OfficerRegisterForm.get('Department').markAsTouched();
        return;
    }
  }

}
