import { NgModule } from '@angular/core';
import { TheW0rksh0pComponent } from './the-w0rksh0p.component';
import { TheW0rksh0pRoutingModule } from './the-w0rksh0p-routing.module';
import { FrontPageComponent } from './frontpage/front-page.component';
import { W0rkSh0pHeaderComponent } from './header/w0rk-sh0p-header.component';
import { MaterialModule } from '../shared/material.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { CarouselComponent } from './frontpage/carousel/carousel.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    TheW0rksh0pComponent,
    FrontPageComponent,
    W0rkSh0pHeaderComponent,
    AboutUsComponent,
    ProjectsComponent,
    CarouselComponent,
    
  ],
  imports: [
    TheW0rksh0pRoutingModule,
    MaterialModule,
    CommonModule
  ]
})
export class TheW0rksh0pModule { }
