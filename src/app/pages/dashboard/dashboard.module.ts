import { NgModule } from '@angular/core';
import { NbCardModule, NbInputModule, NbButtonModule, NbSpinnerModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbInputModule,
    NbButtonModule,
    NbSpinnerModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
