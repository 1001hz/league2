import { LeagueComponent } from './league.component';
import { LeagueItemComponent } from './league-item';
import { DashboardComponent } from './dashboard';
import { JoinComponent } from './join';
import { AddComponent } from './add';
import { LeagueResolve } from '../resolvers/league.resolver.ts';

export const routes = [
  { path: '',
    component: LeagueComponent,
    children: [
    { path: '', component: DashboardComponent },
    { path: 'item/:id',
      component: LeagueItemComponent,
      resolve: {
        league: LeagueResolve
      }
    },
    { path: 'join', component: JoinComponent },
    { path: 'add', component: AddComponent },
    { path: 'account', loadChildren: './account#AccountModule' },
  ]},
];
