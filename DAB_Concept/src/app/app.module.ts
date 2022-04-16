<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MembersComponent } from './members/members.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogsComponent } from './blogs/blogs.component';
import { PortAdilComponent } from './port-adil/port-adil.component';
import { PortBekaComponent } from './port-beka/port-beka.component';
import { PortDanComponent } from './port-dan/port-dan.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MembersComponent,
    AboutUsComponent,
    BlogsComponent,
    PortAdilComponent,
    PortBekaComponent,
    PortDanComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
=======
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> 5fba9ab793fce960c3c0fce63384a2d916410534
