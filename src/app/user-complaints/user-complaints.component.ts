import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserComplaintsService } from '../services/user-complaints.service';


@Component({
  selector: 'app-user-complaints',
  templateUrl: './user-complaints.component.html',
  styleUrls: ['./user-complaints.component.css']
})
export class UserComplaintsComponent implements OnInit {

  Complaints
  Counter=0;
  constructor(private _usercomplaints:UserComplaintsService, private _router:Router) { }

  ngOnInit(): void 
  {
      this._usercomplaints.getComplaints(localStorage.getItem("User Email")).subscribe
      (
        res=>
        {
          //this.Complaints=res
          console.log("Below is complaints")
          console.log(res)
        },
        err=>
        {
          console.log(err)
        }
      )
  }
}
