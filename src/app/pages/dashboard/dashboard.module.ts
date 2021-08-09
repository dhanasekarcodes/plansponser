import { NgModule } from '@angular/core';
import { NbCardModule, NbInputModule, NbButtonModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbInputModule,
    NbButtonModule
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
