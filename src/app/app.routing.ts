import { Routes, RouterModule } from '@angular/router';
import {
  HomePage,
  ContactsPage,
  SchedulePage,
  SettingsPage
} from '../pages';


const routes: Routes = [
  {
      path: 'home',
      component: HomePage
  },
  {
      path: 'contacts',
      component: ContactsPage
  },
  {
      path: 'schedule',
      component: SchedulePage
  },
  {
      path: 'settings',
      component: SettingsPage
  },
];

export const routing = RouterModule.forRoot( routes, { useHash: true } );
