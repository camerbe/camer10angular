import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Admin/login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { AuthInterceptor } from './Shared/Interceptor/auth.interceptor';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';
import { AdministrationModule } from './Admin/administration/administration.module';
import { UserComponent } from './Admin/dashboard/user/user.component';
import { DashboardHomeComponent } from './Admin/dashboard/dashboard-home/dashboard-home.component';
import { UserListComponent } from './Admin/dashboard/user/user-list/user-list.component';




// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserComponent,
    DashboardHomeComponent,
    UserListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AdministrationModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true

    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
