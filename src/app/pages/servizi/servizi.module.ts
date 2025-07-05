// src/app/pages/servizi/servizi.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necessario per *ngIf, *ngFor
import { ServiziRoutingModule } from './servizi-routing.module';
import { ServiziComponent } from './servizi.component'; // Assicurati che il nome del componente sia ServiziComponent

// Importa i componenti condivisi che userai direttamente nel template di ServiziComponent
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ServiziComponent // Dichiara il componente Servizi
  ],
  imports: [
    CommonModule,
    ServiziRoutingModule,
    SharedModule
  ],
  exports: [
    ServiziComponent // Esporta il componente se dovesse essere usato altrove
  ]
})
export class ServiziModule { }

