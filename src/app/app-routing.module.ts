import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { SmallGroupsComponent } from './small-groups/small-groups.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'smallgroups', component: SmallGroupsComponent },
  { path: 'volunteer', component: VolunteerComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
