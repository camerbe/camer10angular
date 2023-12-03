import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataProfileService<T> {

  constructor(
              @Inject(String) private url:string,
              private httpClient:HttpClient) { }
    getProfile():Observable<T>{
      return this.httpClient.get<T>(this.url)
        .pipe(map((res)=>res));
    }
}
