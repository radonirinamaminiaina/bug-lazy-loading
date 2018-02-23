import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';
import { ParserPipe } from '../../pipe/parser.pipe';

@NgModule({
  imports: [
    CommonModule,
    DetailRoutingModule
  ],
  declarations: [DetailComponent, ParserPipe]
})
export class DetailModule { }
