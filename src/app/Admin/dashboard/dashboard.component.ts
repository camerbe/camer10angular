import {Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/Services/auth.service';
import {CurrentUserModel} from "../../Shared/Models/current-user.model";
import {ObservableService} from "../../Shared/Services/observable.service";
import {Subscription} from "rxjs";
import {ProfileService} from "../../Shared/Services/profile.service";
import {dataProfileModel, ProfileModel} from "../../Shared/Models/profile.model";
import {UserService} from "../../Shared/Services/user.service";
import {User} from "../../Shared/Models/user";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy{
  isAdmin:boolean=false;
  currentUsr:CurrentUserModel={nom:'',prenom:'',role:''};
  private subscription!:Subscription;
   profile!:dataProfileModel;

  /**
   *
   */
  constructor(
    private authService:AuthService,
    private router:Router,
    private profileService:ProfileService,
    private obsService:ObservableService
  ) { }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }


  getProfile(){
    return this.profileService.getProfile()
      .subscribe(
        (res)=>{

          this.profile=res;
          return this.profile
      });

  }
  ngOnInit(): void {
    if (!this.authService.isLoggedIn())  return this.logout();
    this.getProfile();
    this.obsService.getData().subscribe({
      next:res=>console.log(`observable ${res}`)
    })
    console.log(`Profile ${this.profile} `)

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
