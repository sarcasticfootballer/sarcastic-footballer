import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataHandlerService } from './services/data-handler.service';
import { NavbarComponent } from './header/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AuthorsComponent } from './authors/authors.component';
import {Routes,RouterModule} from '@angular/router'
import { MDBBootstrapModule } from 'angular-bootstrap-md';

const varun : Routes =[
{ path :'Home' ,component : HomeComponent },
{ path :'Author' ,component : AuthorsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AuthorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(varun),
    MDBBootstrapModule.forRoot()
  ],
  providers: [DataHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
