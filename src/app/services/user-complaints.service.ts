import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserComplaintsService {

  constructor(private http:HttpClient) { }
  getcomplaints_URL="api/complaints/"
  getcomplaintStatus_URL="api/complaintstatus/"
  getComplaints(email)
  {
    return this.http.get(this.getcomplaints_URL+email).pipe(map((res:Response) => res.json()));
  }

  getComplaintStatus(id)
  {
    return this.http.get(this.getcomplaintStatus_URL+id,{responseType: 'text' })
  }
}
