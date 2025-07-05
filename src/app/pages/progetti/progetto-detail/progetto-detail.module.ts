import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgettoDetailRoutingModule } from './progetto-detail-routing.module';
import { ProgettoDetailComponent } from './progetto-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ProgettoDetailComponent
  ],
  imports: [
    CommonModule,
    ProgettoDetailRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    SharedModule
  ]
})
export class ProgettoDetailModule { }
