import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/* import { ListModule } from '../component/list/list.module'
import { DetailModule } from '../component/detail/detail.module' */
const routes: Routes = [
  { path: 'listes', loadChildren: '../component/list/list.module#ListModule' },
  { path: 'liste/:id', loadChildren: '../component/detail/detail.module#DetailModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
