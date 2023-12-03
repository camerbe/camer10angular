import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../Shared/Services/auth.service";
import { Route, Router } from '@angular/router';
import * as moment from 'moment';
import {ObservableService} from "../../Shared/Services/observable.service";
import {CurrentUserModel} from "../../Shared/Models/current-user.model";
import {Subscription, take} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy{

  loginForm:FormGroup;
  subscription!:Subscription;
  constructor(
    private fb:FormBuilder,
    private authSevice:AuthService,
    private router:Router,
    private obsService: ObservableService

  ) {
    this.loginForm=this.fb.group({
      email:['',[Validators.email]],
      password:['',[Validators.required]]
    })
  }

   get email(){
    return this.loginForm.get('email');
   }
   get password(){
    return this.loginForm.get('password');
   }
   onSubmit(){
    this.authSevice.login(this.loginForm.value);
    this.subscription=this.obsService.getData()
      .subscribe(res=>{
        res.nom.length >0 ? this.router.navigate(['/dashboard']):this.router.navigateByUrl('/login')
      })

   }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }



}
