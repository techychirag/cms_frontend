import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl,Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Complaint_Level } from './complaint_level';
import { Complaint_Types } from './complaint_types';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-complaint-form',
  templateUrl: './complaint-form.component.html',
  styleUrls: ['./complaint-form.component.css']
})
export class ComplaintFormComponent implements OnInit {

  complaintForm:FormGroup;
  RegSuccess:boolean=false;
  somthingWrong:boolean=false;
  imageSizeError:boolean=false;
  Extentions:string;
  imageURL="";
  complaintImageFile:any;
  
  Complaints:Complaint_Types[];
  ComplaintLevels:Complaint_Level[];
  ComplaintSelected:any;

  
  ComplaintLevelSelected:any;

  constructor(private _auth:AuthService) { }

  ngOnInit(): void 
  {
      
    this.Complaints=[
      {Id:1,Name:"Street Light"},
      {Id:2,Name:"Pipe Leakage"},
      {Id:3,Name:"Rain Water"},
      {Id:4,Name:"Garbage"},
    ]

    this.ComplaintLevels=[
      
      {Id:1,Level:"Low"},
      {Id:2,Level:"Medium"},
      {Id:3,Level:"High"},
    ]



      this.complaintForm=new FormGroup
      (
            {
                'Name':new FormControl(null,Validators.required),
                'Landmark':new FormControl(null,Validators.required),
                'Address':new FormControl(null,Validators.required),
                'City':new FormControl(null,Validators.required),   
                'Complaint':new FormControl(null,Validators.required),
                'Complaint_Type':new FormControl(null,Validators.required),
                'Complaint_Level':new FormControl(null,Validators.required),
                'Complaint_Image':new FormControl(null,Validators.required)
    
            }
      );     
  }
  onChangeComplaintType(event): void 
  { 
    this.ComplaintSelected= event.target.value;
    if(this.ComplaintSelected == 'null')
    {
      this.complaintForm.controls['Complaint_Type'].setErrors({ invalid: true });
    }
    
    
  }
  onChangeComplaintLevel(event): void 
  { 
    this.ComplaintLevelSelected= event.target.value;
    if(this.ComplaintLevelSelected == 'null')
    {
      this.complaintForm.controls['Complaint_Level'].setErrors({ invalid: true });
      
    }
  }

  onImageSelected(event)
  {
    this.complaintImageFile=<File>event.target.files[0]
    
    // File Preview
      var reader = new FileReader();
      reader.onload = () => {
        this.imageURL = reader.result as string;
      }
      this.Extentions=this.complaintImageFile.name.split('.').pop()
      console.log(this.complaintImageFile)
      if(this.Extentions.toUpperCase()=='JPG' || this.Extentions.toUpperCase()=='JPEG' || this.Extentions.toUpperCase()=='PNG')
        reader.readAsDataURL(this.complaintImageFile)
      else
      {
        this.imageURL=null
        this.complaintForm.controls['Complaint_Image'].setErrors({ invalid: true });
      }
  }
  onComplaintsSubmit()
  {
    if(this.complaintForm.valid)
    {
      var ComplaintsData=new FormData();
      ComplaintsData.append("Email",localStorage.getItem('User Email'))
      ComplaintsData.append("Name",this.complaintForm.value.Name)
      ComplaintsData.append("Landmark",this.complaintForm.value.Landmark)

      ComplaintsData.append("Address",this.complaintForm.value.Address)

      ComplaintsData.append("City",this.complaintForm.value.City)

      ComplaintsData.append("Complaint",this.complaintForm.value.Complaint)
      ComplaintsData.append("Complaint_Level",this.ComplaintLevels[(this.complaintForm.value.Complaint_Level)-1].Level)
      ComplaintsData.append("Complaint_Type",this.Complaints[(this.complaintForm.value.Complaint_Type)-1].Name)

      ComplaintsData.append("Complaint_Image",this.complaintImageFile)
      
      
      this._auth.postComplaint(ComplaintsData).subscribe
      (
        res=>{
          
          Swal.fire("Good job!", "Complaint Successfully Post!", "success");
                  this.RegSuccess=true; 
                  this.somthingWrong=false;
                  this.imageSizeError=false;
                  this.imageURL=null
                  this.complaintForm.reset();
          },
      err=>{

            if(err.status==413)
            {
              this.imageSizeError=true;
            }
            else
            {
              this.RegSuccess=false; 
              this.somthingWrong=true;
              console.log(err)
            }
              
          }
      )
    }
    else
    {
      this.complaintForm.get('Name').markAsTouched();
      this.complaintForm.get('Landmark').markAsTouched();
      this.complaintForm.get('Address').markAsTouched();
      this.complaintForm.get('City').markAsTouched();
      this.complaintForm.get('Complaint').markAsTouched();
      this.complaintForm.get('Complaint_Level').markAsTouched();
      this.complaintForm.get('Complaint_Type').markAsTouched();
      this.complaintForm.get('Complaint_Image').markAsTouched();
    }
  }
}