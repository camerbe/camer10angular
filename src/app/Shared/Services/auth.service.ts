import { Injectable } from '@angular/core';
import {environment} from "../Environments/environment";
import {HttpClient} from "@angular/common/http";
import { ProfileModel } from '../Models/profile.model';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl=environment.url;
  constructor(
    private httpClient :HttpClient,
    private router:Router
    ) {}
  
  login(credentials:Credential){
    return this.httpClient.post<ProfileModel>(this.baseUrl+'/login',credentials)
    .subscribe({
      next:(res)=>{
        if(res.success){
          const expire_At=moment().add(res.expiresIn,'second');
          localStorage.setItem('token',res.token);
          localStorage.setItem('expires_at',JSON.stringify(expire_At.valueOf));
          this.router.navigateByUrl('dashboard')
        }
        
      },
      error:err=>console.log(err)
    })  
  }

  logout(){
    localStorage.removeItem('expires_at');
    localStorage.removeItem('token');
    localStorage.clear();
  }
  public isLoggedIn() {
     return moment().isBefore(JSON.parse(localStorage.getItem('expires_at')!));
  } 
}


