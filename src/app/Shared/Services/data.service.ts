import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Input } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService<T> {

  constructor(
    @Inject(String) private url:string,
    private httpClient:HttpClient
  ) { }

  getAll():Observable<T[]>{
    return this.httpClient.get<T[]>(this.url)
      .pipe(map((res)=>res));
  }
  show(id:number):Observable<T>{
    return this.httpClient.get<T>(this.url+`/${id}`)
  }
  create(resource:T):Observable<T>{
    return this.httpClient.post<T>(this.url,JSON.stringify(resource));
  }
  delete(id:number):Observable<T>{
    return this.httpClient.delete<T>(this.url+`/${id}`);
  }
  update(id:number,resource:any):Observable<T>{
    return this.httpClient.put<T>(this.url+`/${id}`,resource);
  }
}
