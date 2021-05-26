import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OfficerAuthService } from '../services/officer-auth.service';

@Component({
  selector: 'app-officer-dashboard',
  templateUrl: './officer-dashboard.component.html',
  styleUrls: ['./officer-dashboard.component.css']
})
export class OfficerDashboardComponent implements OnInit {

  constructor(private _OfficerDash:OfficerAuthService, private _route:Router) { }

  ngOnInit(): void 
  {
    this._OfficerDash.getDashboard().subscribe
    (
      res=>
      { 
      },
      err=>
      {
        if(err instanceof HttpErrorResponse)
              {
                if(err.status ===401)
                {
                  console.log(err)
                    this._route.navigate(['/officerlogin']);
                }
              }
      }

    )

  }


  complaintRegistry()
  {
    this._route.navigate(['/complaint-registry'])
  }
  

  officerReport()
  {
    this._route.navigate(['/officer-report'])
  }
}
