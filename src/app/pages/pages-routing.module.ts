import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { ParticipantComponent } from './participant/participant.component';
import { SuccessComponent } from './success/success.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'home',
      component: DashboardComponent,
    },
    {
      path: 'login',
      component: LoginPageComponent,
    },
    {
      path: 'reports',
      component: ReportComponent,
    },
    {
      path: 'participant-list',
      component: ParticipantListComponent,
    },
    {
      path: 'participant',
      component: ParticipantComponent,
    },
    {
      path: 'success',
      component: SuccessComponent,
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
