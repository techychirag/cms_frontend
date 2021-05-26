import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDashboardService {

  private _userDashboardURL="api/dash";
  constructor(private http:HttpClient) { }

  getDashboard()
  {
    return this.http.get(this._userDashboardURL)
  }
}
