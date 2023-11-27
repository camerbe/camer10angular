import { Injectable } from '@angular/core';
import {environment} from "../Environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl=environment.url;
  constructor(private httpClient :HttpClient) {}
  login(credentials:Credential){
    return this.httpClient.post(this.baseUrl+'/login',credentials)
      .subscribe(res=>console.log(res))

  }
}
