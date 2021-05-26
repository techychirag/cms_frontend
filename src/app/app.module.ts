import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth.guard';
import {TokenInterceptorService} from './services/token-interceptor.service';
import { UserDashboardService } from './services/user-dashboard.service';
import { ComplaintFormComponent } from './complaint-form/complaint-form.component';
import { UserComplaintsComponent } from './user-complaints/user-complaints.component';
import { ComplaintStatusComponent } from './complaint-status/complaint-status.component';
import { AdminModule } from './admin/admin.module';

import { OfficerModule } from './officer/officer.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    DashboardComponent,
    NavbarComponent,
    HomeComponent,
    ComplaintFormComponent,
    UserComplaintsComponent,
    ComplaintStatusComponent,
    UserProfileComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    OfficerModule
  ],
  providers: [
    AuthService,UserDashboardService,AuthGuard,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
    },
  
],
  bootstrap: [AppComponent]
})
export class AppModule { }
