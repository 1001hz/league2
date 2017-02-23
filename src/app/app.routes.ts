import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';
import { LoginComponent } from './login';

import { DataResolver } from './app.resolver';

import { CanActivateViaAuthGuard } from './login/canActivateViaAuthGuard';

export const ROUTES: Routes = [
  { path: '',
    component: LoginComponent
  },
  {
    path: 'league',
    loadChildren: './league#LeagueModule'
  },
  { path: 'home',
    component: HomeComponent,
    canActivate: [
      CanActivateViaAuthGuard
    ]
  },
  { path: 'about',
    component: AboutComponent,
    canActivate: [
      CanActivateViaAuthGuard
    ]
  },
  { path: 'detail', loadChildren: './+detail#DetailModule'},
  { path: 'barrel', loadChildren: './+barrel#BarrelModule'},
  { path: '**',    component: NoContentComponent },
];
