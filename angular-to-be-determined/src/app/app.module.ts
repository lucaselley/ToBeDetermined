import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TheW0rksh0pModule } from './theW0rksh0p/the-w0rksh0p.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TheW0rksh0pModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
