import { Routes } from '@angular/router';
import { MissionListComponent } from './components/missionlist/missionlist.component';
import { MissionDetailsComponent } from './components/missiondetails/missiondetails.component';

export const routes: Routes = [
  { path: '', component: MissionListComponent },
  { path: 'details/:id', component: MissionDetailsComponent }
];