import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token=localStorage.getItem('token');
    const authReq= request.clone({
      setHeaders:{
        'Access-Control-Allow-Origin':'*',
        'Content-Type':'application/json',
        'Accept':'*/*',
        'Authorization':`Bearer ${token}`
      }
    })

    return  token ? next.handle(authReq)  :   next.handle(request);
  }
}
