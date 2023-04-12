import { NgModule } from '@angular/core';
import { TheW0rksh0pComponent } from './the-w0rksh0p.component';
import { TheW0rksh0pRoutingModule } from './the-w0rksh0p-routing.module';
import { FrontPageComponent } from './frontpage/front-page/front-page.component';



@NgModule({
  declarations: [
    TheW0rksh0pComponent,
    FrontPageComponent
  ],
  imports: [
    TheW0rksh0pRoutingModule
  ]
})
export class TheW0rksh0pModule { }
