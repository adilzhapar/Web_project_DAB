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
import { HomePageComponent } from './home-page/home-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainbarComponent } from './mainbar/mainbar.component';
import { FooterComponent } from './footer/footer.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { AuthComponent } from './auth/auth.component';

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
    HomeComponent,
    HomePageComponent,
    SidebarComponent,
    MainbarComponent,
    FooterComponent,
    BlogComponent,
    PortfolioDetailsComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
