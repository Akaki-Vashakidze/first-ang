import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './Components/menu/menu.component';
import { MaterialModule } from './material/material.module';
import { LastTripsComponent } from './Components/main-page/last-trips/last-trips.component';
import { RegistrationFormComponent } from './Components/main-page/registration-form/registration-form.component';
import { ContactNavbarComponent } from './Components/contact-navbar/contact-navbar.component';
import { FullLastTripCardComponent } from './Components/main-page/full-last-trip-card/full-last-trip-card.component';
import { ZoomImageComponent } from './Components/main-page/full-last-trip-card/zoom-image/zoom-image.component';
import { SignInComponent } from './Components/main-page/registration-form/sign-in/sign-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GreetingOfferingComponent } from './Components/main-page/greeting-offering/greeting-offering.component';
import { DestinationsComponent } from './Components/destinations/destinations.component';
import { MainPageComponent } from './Components/main-page/main-page.component';
import { EastComponent } from './Components/destinations/east/east.component';
import { WestComponent } from './Components/destinations/west/west.component';
import { DestinationCardComponent } from './Components/destinations/destination-card/destination-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LastTripsComponent,
    RegistrationFormComponent,
    ContactNavbarComponent,
    FullLastTripCardComponent,
    ZoomImageComponent,
    SignInComponent,
    GreetingOfferingComponent,
    DestinationsComponent,
    MainPageComponent,
    EastComponent,
    WestComponent,
    DestinationCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
