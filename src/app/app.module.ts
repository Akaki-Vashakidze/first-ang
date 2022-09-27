import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ManuComponent } from './manu/manu.component';
import { MaterialModule } from './material/material.module';
import { LastTripsComponent } from './last-trips/last-trips.component';


@NgModule({
  declarations: [
    AppComponent,
    ManuComponent,
    LastTripsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
