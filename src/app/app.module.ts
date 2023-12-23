import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepagesComponent } from './Pages/homepages/homepages.component';
import { AboutpagesComponent } from './Pages/aboutpages/aboutpages.component';
import { ContactpagesComponent } from './Pages/contactpages/contactpages.component';
import { NavbarComponent } from './Partials/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepagesComponent,
    AboutpagesComponent,
    ContactpagesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
