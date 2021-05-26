import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComplaintRegisteryService } from '../services/complaint-registery.service';

@Component({
  selector: 'app-complaint-registry',
  templateUrl: './complaint-registry.component.html',
  styleUrls: ['./complaint-registry.component.css']
})
export class ComplaintRegistryComponent implements OnInit {

  constructor(private _authComplaintRegistery:ComplaintRegisteryService, private _router:Router) { }
  Complaints:any;
  FilterData:any;

  ngOnInit(): void {

    this.FilterData={
        "department":localStorage.getItem("Officer Department"),
        "location":localStorage.getItem("Officer Location")
    }
    
    this._authComplaintRegistery.getComplaints(this.FilterData).subscribe
    (
      res=>
      {
        this.Complaints=res
      },
      err=>
      {
        console.log(err)
      }
    )
  }

}
