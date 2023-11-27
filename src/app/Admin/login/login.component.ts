import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../Shared/Services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup
  constructor(
    private fb:FormBuilder,
    private authSevice:AuthService
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
    this.authSevice.login(this.loginForm.value)
   }
}
