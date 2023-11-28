import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserComponent } from '../dashboard/user/user.component';

const routes: Routes = [
  {
    path:'',
    title: 'dashboard',
    component:DashboardComponent,children:[
      {
        path:'dashboard',
        title:'Dashboard',
        component:DashboardComponent
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
