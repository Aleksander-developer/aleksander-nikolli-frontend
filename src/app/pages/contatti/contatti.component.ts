// src/app/pages/contatti/contatti.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; // Aggiunto OnInit per chiarezza, anche se non strettamente usato
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '../../../environments/environment.prod';
// import { environment } from '../../../../environments/environment'; // Percorso corretto per environment

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html', // Corretto il nome del file template
  styleUrls: ['./contatti.component.scss'] // Corretto il nome del file style
})
export class ContattiComponent implements OnInit { // Rinomina la classe e implementa OnInit
  contactForm: FormGroup;
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) {
    this.contactForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      cellulare: ['', [Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d{6,14}$/)]],
      messaggio: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    // Qui puoi aggiungere logica di inizializzazione se necessaria
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Log per debug (rimuovere in produzione)
      console.log('Invio dati:', formData);

      this.http.post(`${environment.apiUrl}/contatti`, formData).subscribe({
        next: () => {
          this.successMessage = 'Messaggio inviato con successo!';
          this.contactForm.reset();
          this.contactForm.markAsPristine();
          this.contactForm.markAsUntouched();
          setTimeout(() => this.successMessage = '', 5000);
        },
        error: (error) => {
          console.error('Errore invio messaggio:', error); // Log dell'errore completo
          this.snackBar.open('Errore durante l\'invio. Riprova.', 'Chiudi', { duration: 5000 });
        }
      });
    } else {
      // Per mostrare gli errori immediatamente se il form non è valido al submit
      this.contactForm.markAllAsTouched(); 
    }
  }
}