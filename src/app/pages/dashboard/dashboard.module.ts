import { NgModule } from '@angular/core';
import { NbCardModule, NbRadioModule, NbCheckboxModule, NbInputModule, NbButtonModule, NbSpinnerModule } from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    NbCardModule,
    ThemeModule,
    NbInputModule,
    NbButtonModule,
    NbSpinnerModule,NbCheckboxModule, NbInputModule,
  ],
  declarations: [
    DashboardComponent,
  ],
})
export class DashboardModule { }
