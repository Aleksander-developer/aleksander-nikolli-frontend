// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importa il MaterialModule che si trova nella stessa cartella
import { NavbarComponent } from './components/navbar.component';
import { FooterComponent } from './components/footer.component';
import { WhyChoseMeComponent } from './components/why-chose-me.component';
import { QuoteBoxComponent } from './components/quote-box.component';
import { MaterialModule } from './shared/material.module';

// Importa i componenti condivisi. I percorsi sono stati aggiornati
// per riflettere che shared.module.ts è in 'shared/' e i componenti in 'shared/components/'
// Nota: Questi componenti devono essere dichiarati qui e solo qui.


@NgModule({
  // Dichiara i componenti che appartengono a questo modulo.
  // Questi componenti NON devono essere dichiarati in nessun altro modulo.
  declarations: [
    NavbarComponent,
    FooterComponent,
    WhyChoseMeComponent,
    QuoteBoxComponent
  ],
  // Importa i moduli di cui i componenti dichiarati qui hanno bisogno.
  // CommonModule è necessario per direttive come *ngIf, *ngFor.
  // MaterialModule fornisce tutti i componenti di Angular Material e altri moduli utili.
  imports: [
    CommonModule,
    MaterialModule
  ],
  // Esporta i componenti e i moduli che altri moduli (come AppModule o i moduli delle pagine)
  // dovranno importare per utilizzare ciò che è definito qui.
  exports: [
    NavbarComponent,
    FooterComponent,
    WhyChoseMeComponent,
    QuoteBoxComponent,
    MaterialModule, // Esporta MaterialModule per renderlo disponibile agli importatori di SharedModule
    CommonModule    // Utile esportare CommonModule per le direttive *ngIf, *ngFor
  ]
})
export class SharedModule { }
