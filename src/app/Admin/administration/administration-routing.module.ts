import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserComponent } from '../dashboard/user/user.component';
import {DashboardHomeComponent} from "../dashboard/dashboard-home/dashboard-home.component";
import {UserListComponent} from "../dashboard/user/user-list/user-list.component";

const routes: Routes = [
  {
    path:'dashboard',
    title: 'dashboard',
    component:DashboardComponent,children:[
      {
        path:'Dashboard',
        title:'Dashboard',
        component:DashboardComponent
      },
      {
        path:'users',
        title:'User list',
        component:UserListComponent
      },
      {
        path:'users/add',
        title:'Add user',
        component:UserComponent
      },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
