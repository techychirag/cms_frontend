import { Component, OnInit } from '@angular/core';
import { AdminDashService } from '../services/admin-dash.service';

@Component({
  selector: 'app-admin-report',
  templateUrl: './admin-report.component.html',
  styleUrls: ['./admin-report.component.css']
})
export class AdminReportComponent implements OnInit {
  Complaints:any;
  ComplaintsCopy:any;
  constructor(private _adminservices:AdminDashService) { }

  PendingCount:number=0;
  OnProgressCount:number=0;
  RejectedCount:number=0;
  CompletedCount:number=0;
  p:number=1;
  city:string;

  ngOnInit(): void {
    this._adminservices.getAllComplaints().subscribe
    (
      res=>
        {
          this.Complaints=res
          this.ComplaintsCopy=res
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

  searchCity()
  {
    if(this.city!="")
    {
      this.ComplaintsCopy=this.ComplaintsCopy.filter(res=>{
        return res.city.match(this.city);
      })
    }
    else
    this.ngOnInit()
   
  }

}
