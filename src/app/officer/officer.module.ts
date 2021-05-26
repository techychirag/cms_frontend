import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficerRegisterComponent } from './officer-register/officer-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OfficerLoginComponent } from './officer-login/officer-login.component';
import { OfficerDashboardComponent } from './officer-dashboard/officer-dashboard.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { OfficerTokenIntercepterService } from './services/officer-token-intercepter.service';
import { ComplaintRegistryComponent } from './complaint-registry/complaint-registry.component';

import { OfficerComplaintStatusComponent } from './officer-complaint-status/officer-complaint-status.component';
import { RouterModule } from '@angular/router';
import { OfficerReportComponent } from './officer-report/officer-report.component';



@NgModule({
  declarations: [OfficerRegisterComponent, OfficerLoginComponent, OfficerDashboardComponent, ComplaintRegistryComponent, OfficerComplaintStatusComponent, OfficerReportComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    OfficerRegisterComponent
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:OfficerTokenIntercepterService,
      multi:true
    },]
})
export class OfficerModule { }
