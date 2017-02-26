import { Routes } from '@angular/router';

import { NoContentComponent } from './no-content';
import { LoginComponent } from './login';
import { SignupComponent } from './signup';

import { DataResolver } from './app.resolver';

import { CanActivateViaAuthGuard } from './login/canActivateViaAuthGuard';

export const ROUTES: Routes = [
  { path: '',
    component: LoginComponent
  },
  { path: 'signup',
    component: SignupComponent
  },
  {
    path: 'league',
    loadChildren: './league#LeagueModule',
    canActivate: [
      CanActivateViaAuthGuard
    ]
  },
  { path: '**',    component: NoContentComponent },
];
