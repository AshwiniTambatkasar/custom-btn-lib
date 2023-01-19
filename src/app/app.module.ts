import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonLibModule } from 'button-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
