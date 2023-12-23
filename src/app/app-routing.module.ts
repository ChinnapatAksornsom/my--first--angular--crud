import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepagesComponent } from './Pages/homepages/homepages.component';
import { AboutpagesComponent } from './Pages/aboutpages/aboutpages.component';
import { ContactpagesComponent } from './Pages/contactpages/contactpages.component';

const routes: Routes = [
  { path: '',component: HomepagesComponent, title: 'Home page'},
  { path: 'about-us',component: AboutpagesComponent, title: 'About us'},
  { path: 'contact-us',component: ContactpagesComponent, title: 'Contact us'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
