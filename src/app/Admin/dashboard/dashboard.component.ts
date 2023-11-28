import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/Services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isAdmin:boolean=false;
  /**
   *
   */
  constructor(
    private authService:AuthService,
    private router:Router
  ) {
       
  }
logout() {
  this.authService.logout;
  this.router.navigateByUrl('login');
}

}
