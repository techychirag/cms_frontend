import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OfficerComplaintStatusService } from '../services/officer-complaint-status.service';
import { Complaint_Status_Class } from './Complaint_Status_Class';

@Component({
  selector: 'app-officer-complaint-status',
  templateUrl: './officer-complaint-status.component.html',
  styleUrls: ['./officer-complaint-status.component.css']
})
export class OfficerComplaintStatusComponent implements OnInit {

  constructor(private _activityrouter:ActivatedRoute, private _complaintStatusService:OfficerComplaintStatusService) { }

  Complaint_Status:any;
  ComplaintStatusSelected:any;
  Complaint_Status_Array:Complaint_Status_Class[];
  Complaint_ID:any;

  //image uploading variables...
  imageSizeError:boolean=false;
  fileTypeError:boolean=false;
  Extentions:string;
  imageURL="";
  complaintImageFile:any=null;



  ngOnInit(): void
   {
          this.Complaint_Status_Array=[
            {Id:1,Name:"Pending"},
            {Id:2,Name:"On Progress"},
            {Id:3,Name:"Rejected"},
            {Id:4,Name:"Completed"},
          ]

        this._activityrouter.paramMap.subscribe(
          (params: any) => {
            this.Complaint_ID= params.get('id');
          }
        )
        this._complaintStatusService.getComplaintStatus(this.Complaint_ID).subscribe(
          res=>
          {
            this.Complaint_Status=res[0]
            this.Complaint_Status.forEach(element => {
              element['isEdit']=false;
            });
          },
          err=>
          {
            console.log(err);
          }

        )
  }
  update(complaint)
  {
      var ComplaintsData=new FormData();
      ComplaintsData.append("_id",complaint._id)
      ComplaintsData.append("complaint_status",this.ComplaintStatusSelected)
      ComplaintsData.append("reason",complaint.reason)
      ComplaintsData.append("officer_proof",this.complaintImageFile)
      ComplaintsData.append("solution",complaint.solution)
     
      
      this._complaintStatusService.updateComplaintStatus(ComplaintsData).subscribe(
 
      res=>
      {
        this.imageSizeError=false;
        this.fileTypeError=false;
        this.imageURL=null
        complaint.isEdit=false;
        this.ngOnInit();
      },
      err=>
      {
        if(err.status==413)
        {
          this.imageSizeError=true;
        }
        if(err.status==402)
        {
          this.fileTypeError=true;
        }
        console.log(err)
      }

      )


  }




  isEdit(complaint)
  {
    complaint.isEdit=true;
  }
  cancel(complaint)
  {
    complaint.isEdit=false;
    this.imageSizeError=false;
    this.imageURL=null
    this.ngOnInit();
  }
  

  onChangeComplaintStatus(event): void 
  { 
    this.ComplaintStatusSelected= event.target.value;
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
     
      if(this.Extentions.toUpperCase()=='JPG' || this.Extentions.toUpperCase()=='JPEG' || this.Extentions.toUpperCase()=='PNG')
        reader.readAsDataURL(this.complaintImageFile)
      else
      {
        this.imageURL=null
        
      }
  }

}
