import { Injectable } from '@angular/core';
import {DataProfileService} from "./data-profile.service";
import {dataProfileModel, ProfileModel} from "../Models/profile.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../Environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfileService extends DataProfileService<dataProfileModel>{
    constructor(httpClient:HttpClient) {
    super(environment.url+`/profile`,httpClient)
  }
}
