import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComplaintRegisteryService {

  constructor(private http:HttpClient) { }
  Complaint_Registry_URL="api/complaintregistry"
  getComplaints(data)
  {
    return this.http.post(this.Complaint_Registry_URL,data)
  }
}
