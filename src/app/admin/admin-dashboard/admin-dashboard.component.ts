import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminDashService } from '../services/admin-dash.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private _adminDash:AdminDashService, private _route:Router) { }

  ngOnInit(): void 
  {
    this._adminDash.getDashboard().subscribe
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
                    this._route.navigate(['/admlogin']);
                }
              }
      }

    )

  }


  createOfficerAccount()
  {
    this._route.navigate(['/officerregister'])
  }
  allreport()
  {
    this._route.navigate(['/admin-report'])
  }



  allUsers()
  {
    this._route.navigate(['/all-users'])
  }


}
