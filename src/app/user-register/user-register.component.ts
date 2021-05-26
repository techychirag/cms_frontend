import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  RegSuccess:boolean=false;
  somthingWrong:boolean=false;
  EmailIsUsedError:boolean=false;
  RegistrationForm:FormGroup;

  closeSuccessAlert()
  {
      this.RegSuccess=false;
  }
  closeDangerAlert()
  {
      this.somthingWrong=false;
  }
  constructor(private _auth:AuthService) { }

  ngOnInit(): void 
  {
      this.RegistrationForm=new FormGroup
      (
            {
                'FirstName':new FormControl(null,Validators.required),
                'LastName':new FormControl(null,Validators.required),
                'Email':new FormControl(null,[Validators.required,Validators.email]),
                'Password':new FormControl(null,[Validators.required,Validators.minLength(5)]),
                'MobileNumber':new FormControl(null,[Validators.required]),
                'Address':new FormControl(null,Validators.required)
            }
      );
  }
  onRegisterSubmit(){
  
   if(this.RegistrationForm.valid)
   {
        this._auth.registerUser(this.RegistrationForm.value).subscribe
        (
            res=>{
                    Swal.fire("Good job!", "Registration Successfully Done!", "success");
                    this.RegSuccess=true; 
                    this.somthingWrong=false;
                    this.EmailIsUsedError=false;
                    this.RegistrationForm.reset();
                    console.log(res)
                    
                },
            err=>{

                        if(err.status==404)
                        {
                        this.somthingWrong=true
                        this.RegSuccess=false; 
                        }
                        if(err.status==401)
                        {
                        this.EmailIsUsedError=true
                        }
                            console.log(err)
                    
                }
        )    
    }
    else
    {
        this.RegistrationForm.get('FirstName').markAsTouched();
        this.RegistrationForm.get('LastName').markAsTouched();
        this.RegistrationForm.get('Email').markAsTouched();
        this.RegistrationForm.get('Password').markAsTouched();
        this.RegistrationForm.get('MobileNumber').markAsTouched();
        this.RegistrationForm.get('Address').markAsTouched();
        return;
    }
        
  }
}
