import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { LandComponent } from './land/land.component';



const routes: Routes = [{
  path: '',
  component: ProfileComponent,
  children: [
    {
      path: 'home',
      component: LandComponent,
    },
    {
      path: '',
      redirectTo: 'home',
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
