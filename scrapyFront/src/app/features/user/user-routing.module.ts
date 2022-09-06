import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndexComponent} from './index/index.component';
import {UserComponent} from './user.component';
import {AuthGuard} from '../../@core/guard/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [{
      path: '',
      component: IndexComponent
    }
    ]
  },
  {
    path: 'index',
    loadChildren: () => import('../user/user.module').then(m => m.UserModule),
    canLoad: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
