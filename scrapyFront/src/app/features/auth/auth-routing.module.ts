import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from '../../@core/guard/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canActivate:[AuthGuard]
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
export class AuthRoutingModule { }
