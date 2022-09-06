import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './@core/guard/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
