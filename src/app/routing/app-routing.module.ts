import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../component/home/home.component';

import { ListModule } from '../component/list/list.module';
import { DetailModule } from '../component/detail/detail.module';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'survey', loadChildren: () => ListModule },
  { path: 'survey/:id', loadChildren: () => DetailModule },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
