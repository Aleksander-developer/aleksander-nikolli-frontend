// src/app/pages/progetti/progetto-detail/progetto-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Importa SharedService e l'interfaccia Progetto dal tuo service unificato
import { SharedService, Progetto } from '../../../shared/services/shared.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; // Per sanificare HTML dinamico

@Component({
  selector: 'app-progetto-detail',
  templateUrl: './progetto-detail.component.html', // Corretto il nome del template
  styleUrls: ['./progetto-detail.component.scss'] // Corretto il nome dello stile
})
export class ProgettoDetailComponent implements OnInit { // Rinomina la classe
  progettoId!: string;
  progettoData?: Progetto; // Usa l'interfaccia Progetto dal SharedService
  loading = true;
  errore = '';

  // Non useremo più mockProgetti direttamente, ma li ho lasciati per riferimento
  // nel caso tu voglia un fallback locale in futuro, ma la logica principale sarà dal backend.
  // mockProgetti: Progetto[] = [
  //   {
  //     _id: 'portfolio-web-app',
  //     titolo: 'Portfolio Web App', // Usiamo 'titolo' per allinearci al backend
  //     descrizione: 'Un portfolio moderno e responsive costruito con Angular e Material.',
  //     // 'dettagli' non è presente nel tuo modello backend, quindi lo rimuovo o lo mappo da 'descrizione'
  //     // dettagli: `Questo progetto utilizza Angular 15, Material Design, TypeScript avanzato, ed è ottimizzato per performance e SEO.`,
  //     immagine: 'https://placehold.co/600x400/1a1a2e/00bcd4?text=Portfolio+Placeholder', // Immagine placeholder
  //     tecnologie: ['Angular', 'TypeScript', 'Angular Material', 'SCSS'], // 'tecnologie'
  //     linkDemo: 'https://tuo-sito.it/portfolio',
  //     linkRepo: 'https://github.com/tuo-username/portfolio-web-app' // 'linkRepo'
  //   }
  // ];

  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService, // Inietta SharedService
    private sanitizer: DomSanitizer // Inietta DomSanitizer per il contenuto HTML
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.progettoId = params.get('id') ?? '';
      if (this.progettoId) {
        this.getProgettoDetail(this.progettoId);
      } else {
        this.errore = 'ID progetto non fornito.';
        this.loading = false;
      }
    });
  }

  getProgettoDetail(id: string): void {
    this.loading = true;
    this.errore = '';
    this.sharedService.getProgettoById(id).subscribe({
      next: (progetto) => {
        this.progettoData = progetto; // Assegna direttamente il progetto dal backend
        this.loading = false;
        console.log('Dettaglio progetto caricato:', this.progettoData); // Debug
      },
      error: (err) => {
        console.error('Errore caricamento dettaglio progetto:', err);
        this.errore = 'Errore nel caricamento del progetto o progetto non trovato.';
        this.loading = false;
        // Fallback a dati mock se il backend fallisce e hai dati mock pertinenti
        // this.progettoData = this.mockProgetti.find(p => p._id === id);
        // if (!this.progettoData) {
        //   this.errore = 'Progetto non trovato.';
        // }
      }
    });
  }

  // Metodo per sanificare HTML se 'descrizione' o altri campi potessero contenere HTML
  // Non strettamente necessario se il tuo backend restituisce testo puro.
  // getSafeHtml(html: string | undefined): SafeHtml {
  //   return html ? this.sanitizer.bypassSecurityTrustHtml(html) : '';
  // }
}