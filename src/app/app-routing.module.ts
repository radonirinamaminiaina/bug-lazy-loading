import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'survey', loadChildren: 'app/component/list/list.module#ListModule' },
  { path: 'survey/:id', loadChildren: 'app/component/detail/detail.module#DetailModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
