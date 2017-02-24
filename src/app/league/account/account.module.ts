import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NameComponent} from './name';
import {AccountComponent} from './account.component';
import {ROUTES} from './account.routes';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    AccountComponent,
    NameComponent
  ],
  imports: [RouterModule.forChild(ROUTES)]
})
export class AccountModule {}
