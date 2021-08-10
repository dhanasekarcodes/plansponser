import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ReportComponent } from './report/report.component';
import { NbCardModule, NbInputModule, NbButtonModule, NbSpinnerModule, NbSelectModule } from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { EchartsLineComponent } from './echarts/echarts-line.component';
import { EchartsPieComponent } from './echarts/echarts-pie.component';
import { EchartsBarComponent } from './echarts/echarts-bar.component';
import { ParticipantListComponent } from './participant-list/participant-list.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ParticipantComponent } from './participant/participant.component';
  

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    NbCardModule,
    NgxEchartsModule,
    NbInputModule,
    NbButtonModule,
    Ng2SmartTableModule,
    NbSpinnerModule,
    NbSelectModule,
  ],
  declarations: [
    PagesComponent,
    ReportComponent,
    EchartsLineComponent,
    EchartsPieComponent,
    EchartsBarComponent,
    ParticipantListComponent,
    ParticipantComponent
    ],
})
export class PagesModule {
}
