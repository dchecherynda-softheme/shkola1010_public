import { NgModule } from '@angular/core';

import { BannerComponent } from './components/banner/banner.component';
import { CommonModule } from '@angular/common';
import { LeftNavigationComponent } from './components/left-navigation/left-navigation.component';
import { MainComponent } from './main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { VacationRequestComponent } from './components/vacation-request/vacation-request.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BannerComponent,
    LeftNavigationComponent,
    MainComponent,
    ProfileComponent,
    TopNavigationComponent,
    VacationRequestComponent,
    CalendarComponent
  ]
})
export class MainModule { }
