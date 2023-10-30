import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgFor } from '@angular/common';
import { NgClass } from '@angular/common';
import { OurExperiencesComponent } from './our-experiences/our-experiences.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeBackgroundComponent } from './home-background/home-background.component';
import { OurCompanyComponent } from './our-company/our-company.component';
import { OurManagementComponent } from './our-management/our-management.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { HomeComponent } from './home/home.component';
import { KepailitanPtKaisoMaritimGlobalDalamPailitComponent } from './kepailitan-pt-kaiso-maritim-global-dalam-pailit/kepailitan-pt-kaiso-maritim-global-dalam-pailit.component';
import {PublicCasesComponent} from "./public-cases/public-cases.component";

@NgModule({
  declarations: [
    AppComponent,
    OurExperiencesComponent,
    ContactComponent,
    FooterComponent,
    HomeBackgroundComponent,
    OurCompanyComponent,
    OurManagementComponent,
    OurClientsComponent,
    HomeComponent,
    KepailitanPtKaisoMaritimGlobalDalamPailitComponent,
    PublicCasesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        NgFor,
        NgClass,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
