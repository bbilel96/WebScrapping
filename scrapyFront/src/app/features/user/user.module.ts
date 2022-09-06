import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { IndexComponent } from './index/index.component';
import {ZorroModule} from '../../@core/shared/zorro/zorro.module';
import { UserComponent } from './user.component';
import {LyoutModule} from '../../@core/component/lyout/lyout.module';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [IndexComponent, UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ZorroModule,
    LyoutModule,
    NgbPaginationModule,
    FormsModule
  ]
})
export class UserModule { }
