import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfirmiersComponent } from './pages/infirmiers/infirmiers.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { DeplacementsComponent } from './pages/deplacements/deplacements.component';
import { HomeComponent } from './pages/home/home.component';
import { AjoutComponent } from './pages/ajout/ajout.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InfirmiersComponent,
    PatientsComponent,
    DeplacementsComponent,
    HomeComponent,
    AjoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
