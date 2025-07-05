import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiziRoutingModule } from './servizi-routing.module';
import { ServiziComponent } from './servizi.component';


@NgModule({
  declarations: [
    ServiziComponent
  ],
  imports: [
    CommonModule,
    ServiziRoutingModule
  ]
})
export class ServiziModule { }
