import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { PagesRoutingModule } from './profile-routing.module';
import { LandComponent } from './land/land.component';
import { NbCardModule, NbInputModule, NbTooltipModule, NbButtonModule, NbSpinnerModule, NbCheckboxModule, NbSelectModule, NbRadioModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';

@NgModule({
  declarations: [ ProfileComponent, LandComponent ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbCardModule, NbInputModule, NbButtonModule, ThemeModule, NbCheckboxModule
  ]
})
export class ProfilePageModule { }
