import { Routes } from '@angular/router';
import { AppHomeComponent } from './app.home.component';

export const routes: Routes = [
  { path: 'en', pathMatch: 'full', component: AppHomeComponent, data: { lang: 'en', link: 'en' } },
  { path: 'da', pathMatch: 'full', component: AppHomeComponent, data: { lang: 'da', link: 'da' } },
  { path: '', pathMatch: 'full', component: AppHomeComponent, data: { lang: 'ru', link: '' } },
  // {
  //   path: '**',
  //   redirectTo: '/',
  // },
];

// export const routes: Routes = [
//   { path: 'en', component: AppComponent },
//   { path: 'da', component: AppComponent },
//   {
//     path: '**',
//     redirectTo: '/',
//   },
// ];
