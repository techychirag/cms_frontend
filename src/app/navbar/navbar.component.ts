import { Component, OnInit } from '@angular/core';
import { AdminAuthService } from '../admin/services/admin-auth.service';
import { OfficerAuthService } from '../officer/services/officer-auth.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor(public _auth:AuthService,public _adminAuth:AdminAuthService, public _officerAuth:OfficerAuthService) { }

  ngOnInit(): void {
  }

}
