import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdmTokenIntercepterService } from './services/adm-token-intercepter.service';
import { AdminReportComponent } from './admin-report/admin-report.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminUsersListComponent } from './admin-users-list/admin-users-list.component';




@NgModule({
  declarations: [AdminLoginComponent, AdminDashboardComponent, AdminReportComponent, AdminUsersListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule 
  ],
  exports:[
    AdminLoginComponent,
    AdminDashboardComponent
  ],
  providers:[
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AdmTokenIntercepterService,
      multi:true
    },]
})
export class AdminModule { }
