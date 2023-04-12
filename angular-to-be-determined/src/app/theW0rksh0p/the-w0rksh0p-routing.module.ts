import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TheW0rksh0pComponent } from './the-w0rksh0p.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', component: TheW0rksh0pComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TheW0rksh0pRoutingModule { }
