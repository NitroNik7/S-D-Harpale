import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PracticeComponent } from './practice/practice.component';
import { ServicesComponent } from './services/services.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SliderCarouselComponent } from './slider-carousel/slider-carousel.component';
import { AppRoutingModule } from './app-routing.module';
import { CompanyComponent } from './company/company.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PracticeComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactUsComponent,
    SliderCarouselComponent,
    CompanyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    SlickCarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
