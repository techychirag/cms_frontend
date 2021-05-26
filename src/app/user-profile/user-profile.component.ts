import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private _userAuth:AuthService) { }
  User:any;
  ngOnInit(): void 
  {
    this.User=this._userAuth.getUser(localStorage.getItem('User Email')).subscribe
    (
      res=>
      {
       
        this.User=res;
        this.User['isEdit']=false; 
      },
      err=>
      {
        console.log(err)
      }
    )
    
  }


  update(user)
  {
      var UserData={
      "_id":user._id,
      "firstname":user.firstname,
      "lastname":user.lastname,
      "mobile_number":user.mobile_number,
      "address":user.address
    }
    
      this._userAuth.updateUser(UserData).subscribe
      (
          res=>
          {
            user.isEdit=false;
            this.ngOnInit();
            Swal.fire("Good job!", "Profile Updated Successfully!", "success");
          },
          err=>
          {
            console.log(err)
          }

      )
  }


  isEdit(user)
  {
    user.isEdit=true;
  }
  cancel(user)
  {
    user.isEdit=false;
    this.ngOnInit();
  }
  

}
