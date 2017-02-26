import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { ROUTES } from './account.routes';

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    AccountComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class AccountModule {}
