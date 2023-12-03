import { Injectable } from '@angular/core';
import {environment} from "../Environments/environment";
import {HttpClient} from "@angular/common/http";
import { ProfileModel } from '../Models/profile.model';
import * as moment from 'moment';
import { Router } from '@angular/router';
import {ObservableService} from "./observable.service";
import {CurrentUserModel} from "../Models/current-user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl=environment.url;
   private _usr:CurrentUserModel={nom:'',prenom:'',role:''};
  constructor(
    private httpClient :HttpClient,
    private router:Router,
    private obsService:ObservableService
    ) {}

  login(credentials:Credential){

    // @ts-ignore
    // @ts-ignore
    return this.httpClient.post<ProfileModel>(this.baseUrl+'/login',credentials)
    .subscribe({

      next:(res)=>{

          //const expire_At=moment().add(res.expiresIn,'second');
          localStorage.setItem('token',res.token);
          localStorage.setItem('expires_at',JSON.stringify(res.expiresIn));
          this._usr.nom=res.data.nom;
          this._usr.prenom=res.data.prenom;
          this._usr.role=res.role
          this.obsService.sendData(this._usr);
          //this.router.navigateByUrl('dashboard')
          return this._usr;

      },
      error:err=>console.log(err)
    })
  }

  logout(){
    localStorage.removeItem('expires_at');
    localStorage.removeItem('token');

  }
  public isLoggedIn() {
     return moment().isBefore(JSON.parse(localStorage.getItem('expires_at')!));
  }
}


