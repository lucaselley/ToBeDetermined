import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TheW0rksh0pComponent } from './the-w0rksh0p.component';

const routes: Routes = [
  {path:'', component:TheW0rksh0pComponent}
];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TheW0rksh0pRoutingModule { }
