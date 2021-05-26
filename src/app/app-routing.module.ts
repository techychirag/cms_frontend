import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdmAuthGuard } from './admin/adm-auth.guard';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminReportComponent } from './admin/admin-report/admin-report.component';
import { AdminUsersListComponent } from './admin/admin-users-list/admin-users-list.component';

import { AuthGuard } from './auth.guard';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { ComplaintStatusComponent } from './complaint-status/complaint-status.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ComplaintRegistryComponent } from './officer/complaint-registry/complaint-registry.component';
import { OfficerAuthGuardGuard } from './officer/officer-auth-guard.guard';
import { OfficerComplaintStatusComponent } from './officer/officer-complaint-status/officer-complaint-status.component';
import { OfficerDashboardComponent } from './officer/officer-dashboard/officer-dashboard.component';
import { OfficerLoginComponent } from './officer/officer-login/officer-login.component';
import { OfficerRegisterComponent } from './officer/officer-register/officer-register.component';
import { OfficerReportComponent } from './officer/officer-report/officer-report.component';

import { UserComplaintsComponent } from './user-complaints/user-complaints.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:UserLoginComponent},
  {path:"register",component:UserRegisterComponent},
  {path:"about",component:AboutComponent},
  {path:"mycomplaints",component:UserComplaintsComponent,
  canActivate:[AuthGuard]},
  {path:"dashboard",component:DashboardComponent,
  canActivate:[AuthGuard]},
  {path:"complaint",component:ComplaintFormComponent,
  canActivate:[AuthGuard]},
  {path:"profile",component:UserProfileComponent,
  canActivate:[AuthGuard]},
  {path:"complaintstatus/:id",component:ComplaintStatusComponent,
  canActivate:[AuthGuard]},
  {path:"admlogin",component:AdminLoginComponent},
  {path:"officerlogin",component:OfficerLoginComponent},

  {path:"admdashboard",component:AdminDashboardComponent,
  canActivate:[AdmAuthGuard]},
  {path:"officer-dashboard",component:OfficerDashboardComponent
  ,canActivate:[OfficerAuthGuardGuard]},
  {path:"complaint-registry",component:ComplaintRegistryComponent
  ,canActivate:[OfficerAuthGuardGuard]},
  
  {path:"officer-complaint-status/:id",component:OfficerComplaintStatusComponent
  ,canActivate:[OfficerAuthGuardGuard]},
  {path:"officer-report",component:OfficerReportComponent
  ,canActivate:[OfficerAuthGuardGuard]},

  {path:"officerregister",component:OfficerRegisterComponent,
  canActivate:[AdmAuthGuard]},
  {path:"all-users",component:AdminUsersListComponent,
  canActivate:[AdmAuthGuard]},
  {path:"admin-report",component:AdminReportComponent,
  canActivate:[AdmAuthGuard]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }