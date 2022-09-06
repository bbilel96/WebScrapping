import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import {DatePipe, registerLocaleData} from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LyoutModule} from './@core/component/lyout/lyout.module';
import {ZorroModule} from './@core/shared/zorro/zorro.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        LyoutModule,
        ZorroModule,
        NgbModule
    ],
  providers: [{ provide: NZ_I18N, useValue: fr_FR }, DatePipe],
  bootstrap: [AppComponent]

})
export class AppModule { }
