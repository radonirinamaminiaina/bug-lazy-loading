import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { ParserPipe } from '../../pipe/parser.pipe';
import { ChartDirective } from '../../directives/chart.directive';

@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule
  ],
  declarations: [DetailComponent, ParserPipe, ChartDirective]
})
export class DetailModule { }
