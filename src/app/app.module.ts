import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { NgClass } from '@angular/common';
import { OurExperiencesComponent } from './our-experiences/our-experiences.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeBackgroundComponent } from './home-background/home-background.component';
import { OurCompanyComponent } from './our-company/our-company.component';
import { OurManagementComponent } from './our-management/our-management.component';
import { OurClientsComponent } from './our-clients/our-clients.component';

@NgModule({
  declarations: [
    AppComponent,
    OurExperiencesComponent,
    ContactComponent,
    FooterComponent,
    HomeBackgroundComponent,
    OurCompanyComponent,
    OurManagementComponent,
    OurClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgFor,
    NgClass
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
