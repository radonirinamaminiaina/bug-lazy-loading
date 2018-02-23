import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ListModule } from '../component/list/list.module'
const routes: Routes = [
  { path: 'listes', loadChildren: () => ListModule }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
