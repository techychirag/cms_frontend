import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserComplaintsService } from '../services/user-complaints.service';

@Component({
  selector: 'app-complaint-status',
  templateUrl: './complaint-status.component.html',
  styleUrls: ['./complaint-status.component.css']
})
export class ComplaintStatusComponent implements OnInit {

  constructor(private _activityrouter:ActivatedRoute, private _complaintStatusService:UserComplaintsService) { }

  Complaint_Status:any;
  Complaint_ID:any;
  ngOnInit(): void
   {
        this._activityrouter.paramMap.subscribe(
          (params: any) => {
            this.Complaint_ID= params.get('id');
          }
        )
        this._complaintStatusService.getComplaintStatus(this.Complaint_ID).subscribe(
          res=>
          {
            this.Complaint_Status=res[0]
            
          },
          err=>
          {
            console.log(err);
          }

        )
  }
}