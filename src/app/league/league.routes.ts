import { LeagueComponent } from './league.component';
import { HomeComponent } from './home';

export const routes = [
  { path: '',
    component: LeagueComponent,
    children: [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'account', loadChildren: './account#AccountModule' },
  ]},
];
