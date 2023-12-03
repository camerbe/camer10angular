import { Component } from '@angular/core';
import {User} from "../../../../Shared/Models/user";
import {UserService} from "../../../../Shared/Services/user.service";
import {dataProfileModel} from "../../../../Shared/Models/profile.model";
import {map} from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userFromServer!:User[];
  users!:dataProfileModel[]|any;
  constructor(
    private userService:UserService
  ) {
    this.getAll();
  }
  getAll(){
    // @ts-ignore
    return this.userService.getAll()
      .pipe(map((result)=>result.map(value => value.data)))
      .subscribe(res=>{
        console.log(res)
        const tmpData=res as unknown as User
        this.users=tmpData.data as unknown as dataProfileModel
        return this.users
      })

  }
}
