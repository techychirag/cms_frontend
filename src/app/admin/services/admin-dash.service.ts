import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminDashService {

  private _adminDashboardURL="api/admdash";
  private _getAllComplaintsURL="api/officergetcomplaints";
  private _getAllUsersURL="api/users";
  private _DeleteUserURL="api/user/";
  constructor(private http:HttpClient) { }

  getDashboard()
  {
    return this.http.get(this._adminDashboardURL)
  }

  getAllComplaints()
  {
    return this.http.get(this._getAllComplaintsURL)
  }

  getAllUsers()
  {
    return this.http.get(this._getAllUsersURL)
  }

  deleteUser(user)
  {
    return this.http.delete(this._DeleteUserURL+user._id)
  }
}
