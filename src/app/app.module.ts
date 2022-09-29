import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from './material/material.module';
import { LastTripsComponent } from './last-trips/last-trips.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { ContactNavbarComponent } from './contact-navbar/contact-navbar.component';
import { FullLastTripCardComponent } from './full-last-trip-card/full-last-trip-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LastTripsComponent,
    RegistrationFormComponent,
    ContactNavbarComponent,
    FullLastTripCardComponent
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
