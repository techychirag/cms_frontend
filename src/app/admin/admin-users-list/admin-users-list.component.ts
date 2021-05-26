import { Component, OnInit } from '@angular/core';
import { AdminDashService } from '../services/admin-dash.service';

@Component({
  selector: 'app-admin-users-list',
  templateUrl: './admin-users-list.component.html',
  styleUrls: ['./admin-users-list.component.css']
})
export class AdminUsersListComponent implements OnInit {

  constructor(private _adminDash:AdminDashService) { }

  p:number=1;
  Users:any;
  ngOnInit(): void 
  {
    this._adminDash.getAllUsers().subscribe
    (
        res=>
        {
            this.Users=res
        },
        err=>
        {

        }
    )
  }

  deleteUser(user)
  {
    this._adminDash.deleteUser(user).subscribe
    (
        res=>
        {
          
          this.ngOnInit();
        },
      err=>
        {
          console.log(err)
        }
    )
  }

}
