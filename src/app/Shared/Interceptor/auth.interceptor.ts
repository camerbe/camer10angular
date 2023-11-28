import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token=localStorage.getItem('token');
    if(token){
      request.clone({
        setHeaders:{
          'Access-Control-Allow-Origin':'*',
          'Content-Type':'application/json',
          'Accept':'*/*',
          'Authorization':`Bearer ${token}`
        },
      })
    }
    
    return next.handle(request);
  }
}
