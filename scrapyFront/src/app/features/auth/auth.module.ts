import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import {ZorroModule} from '../../@core/shared/zorro/zorro.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RxReactiveFormsModule} from '@rxweb/reactive-form-validators';


@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ZorroModule,
    FormsModule,
    RxReactiveFormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
