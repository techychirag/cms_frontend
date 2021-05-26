import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDashboardService } from '../services/user-dashboard.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  CurrentLoginEmail:string;
  

  constructor(private _userDashboard:UserDashboardService, private _router:Router) { 
    
  }

  ngOnInit(): void {
    
    this.CurrentLoginEmail=localStorage.getItem('User Email');
    this._userDashboard.getDashboard().subscribe
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
                    this._router.navigate(['/login']);
                }
              }
          }
    )
  }



  //methods
  postComplaint()
  {
    this._router.navigate(['/complaint'])
  }

  myComplaints()
  {
    this._router.navigate(['/mycomplaints'])
  }

  myProfile()
  {
    this._router.navigate(['/profile'])
  }

}
