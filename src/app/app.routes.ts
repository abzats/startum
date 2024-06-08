import { Routes } from '@angular/router';
import { HomeComponent } from './app.home.component';
import { ScheduleComponent } from './schedule/schedule.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
