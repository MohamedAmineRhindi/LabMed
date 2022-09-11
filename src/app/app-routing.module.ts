import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './pages/ajout/ajout.component';
import { DeplacementsComponent } from './pages/deplacements/deplacements.component';
import { HomeComponent } from './pages/home/home.component';
import { InfirmiersComponent } from './pages/infirmiers/infirmiers.component';
import { PatientsComponent } from './pages/patients/patients.component';

const routes: Routes = [
  { path: '', component: HomeComponent  },
  { path: 'infirmiers', component: InfirmiersComponent },
  { path: 'patients', component: PatientsComponent },
  { path: 'deplacements', component: DeplacementsComponent },
  { path: 'ajout', component: AjoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
