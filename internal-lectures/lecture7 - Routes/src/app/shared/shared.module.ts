import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HryvniaPipe } from './hryvnia.pipe';
import { ClickOnceDirective } from './click-once.directive';
import { LoggingService } from './logger.service';
import { OrdersService } from './orders.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HryvniaPipe,
    ClickOnceDirective,
  ],
  exports: [
    HryvniaPipe,
    ClickOnceDirective,
  ],
  providers: [
    LoggingService,
    OrdersService
  ]
})
export class SharedModule { }
