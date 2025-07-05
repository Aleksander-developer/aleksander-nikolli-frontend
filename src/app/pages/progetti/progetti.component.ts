// src/app/pages/progetti/progetti.component.ts
import { Component, OnInit } from '@angular/core';
// Importa SharedService e l'interfaccia Progetto dal tuo service unificato
import { SharedService, Progetto } from '../../shared/services/shared.service';

@Component({
  selector: 'app-progetti',
  templateUrl: './progetti.component.html',
  styleUrls: ['./progetti.component.scss']
})
export class ProgettiComponent implements OnInit { // Rinomina la classe (se non l'hai già fatto)
  progetti: Progetto[] = []; // Array per i progetti (potrebbe rimanere vuoto per il placeholder)
  loading = true; // Indica se i dati sono in caricamento
  errore = ''; // Contiene eventuali messaggi di errore

  // Inietta SharedService
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    // Tentiamo comunque di caricare i progetti dal backend.
    // Il risultato (progetti vuoti o errore) verrà loggato,
    // ma l'HTML mostrerà sempre il messaggio placeholder.
    this.sharedService.getProgetti().subscribe({
      next: (data) => {
        this.progetti = data;
        this.loading = false;
        console.log('Progetti caricati (per debug):', this.progetti);
        if (this.progetti.length === 0) {
          console.log('Nessun progetto trovato dal backend, visualizzo il messaggio placeholder.');
        }
      },
      error: (err) => {
        console.error('Errore caricamento progetti (per debug):', err);
        this.errore = 'Errore nel caricamento dei progetti.';
        this.loading = false;
      }
    });
  }
}