import { Component, OnInit } from '@angular/core';
import { ComplaintRegisteryService } from '../services/complaint-registery.service';

@Component({
  selector: 'app-officer-report',
  templateUrl: './officer-report.component.html',
  styleUrls: ['./officer-report.component.css']
})
export class OfficerReportComponent implements OnInit {

  constructor(private _complaints:ComplaintRegisteryService) { }
  Complaints:any;
  FilterData:any;


  PendingCount:number=0;
  OnProgressCount:number=0;
  RejectedCount:number=0;
  CompletedCount:number=0;


  ngOnInit(): void 
  {
    this.FilterData={
      "department":localStorage.getItem("Officer Department"),
      "location":localStorage.getItem("Officer Location")
      }

      this._complaints.getComplaints(this.FilterData).subscribe
      (

        res=>
        {
          this.Complaints=res
          for (let complaint of this.Complaints)
          {
            if(complaint.complaint_status=="On Progress")
            this.OnProgressCount=this.OnProgressCount+1;
            else if(complaint.complaint_status=="Pending")
            this.PendingCount=this.PendingCount+1;
            else if(complaint.complaint_status=="Rejected")
            this.RejectedCount=this.RejectedCount+1;
            else if(complaint.complaint_status=="Completed")
            this.CompletedCount=this.CompletedCount+1;
          }
        },
        err=>
        {
          console.log(err)
        }
      
      )


  }

}
