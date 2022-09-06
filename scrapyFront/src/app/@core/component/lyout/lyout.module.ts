import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {ZorroModule} from '../../shared/zorro/zorro.module';



@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ZorroModule
  ]
})
export class LyoutModule { }
