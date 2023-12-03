import { Injectable } from '@angular/core';
import {DataService} from "./data.service";
import {User} from "../Models/user";
import {HttpClient} from "@angular/common/http";
import {environment} from "../Environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService extends DataService<User>{

  constructor(httpClient:HttpClient) {
    super(environment.url+`/users`,httpClient)
  }
}
