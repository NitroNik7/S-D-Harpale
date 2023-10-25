import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { HeroesComponent } from './heroes/heroes.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'projects', component: ProjectsComponent },
  { path: 'company', component: CompanyComponent},
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }