import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfficerComplaintStatusService {

  constructor(private http:HttpClient) { }
  getcomplaints_URL="api/complaints/"
  getcomplaintStatus_URL="api/officercomplaintstatus/"
  updateComplaint_URL="api/updatecomplaint/"
  getComplaints(email)
  {
    return this.http.get(this.getcomplaints_URL+email)
  }

  getComplaintStatus(id)
  {
    return this.http.get(this.getcomplaintStatus_URL+id)
  }

  updateComplaintStatus(complaint)
  {
    return this.http.patch(this.updateComplaint_URL+complaint.get('_id'),complaint,{responseType: 'text'})
  }

}
