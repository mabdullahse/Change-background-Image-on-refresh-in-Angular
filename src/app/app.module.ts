import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BgChangeImageDirective } from './bg-change-image.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BgChangeImageDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
