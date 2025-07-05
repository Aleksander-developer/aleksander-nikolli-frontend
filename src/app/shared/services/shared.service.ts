// src/app/shared/services/shared.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; // IMPORTANTE: Importa l'ambiente GENERALE



export interface Progetto {
  _id: string; // Mongo ID
  titolo: string;
  descrizione?: string; 
  tecnologie?: string[];
  linkDemo?: string;
  linkRepo?: string;
  immagine?: string; // Corretto da immagineUrl
  data?: string; 
}

export interface ChiSonoContent {
  _id: string;
  contenuto: string;
  aggiornata?: string; // Data di aggiornamento
}

export interface ContattoPayload {
  // Questa interfaccia è per i dati che invio al backend nel form di contatto
  nome: string;
  email: string;
  messaggio: string;
  cellulare?: string; // Cellulare è opzionale nel backend
}

export interface ContattoResponse extends ContattoPayload {
  // Questa interfaccia è per la risposta dal backend, include anche l'ID e la data
  _id: string;
  data?: string;
}

export interface Servizio {
  _id: string;
  titolo: string;
  descrizione?: string;
  icona?: string;
}

// --- CLASSE DEL SERVICE ---
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private apiUrl = environment.apiUrl; // Utilizza l'URL API dall'ambiente corrente

  constructor(private http: HttpClient) { }

  // --- Metodi per Progetti ---
  getProgetti(): Observable<Progetto[]> {
    return this.http.get<Progetto[]>(`${this.apiUrl}/progetti`);
  }

  getProgettoById(id: string): Observable<Progetto> {
    // La tua rotta progetti.routes.ts ha router.get('/:id', getProgettoById); commentata.
    // Se la scommenterai, questo metodo funzionerà.
    // Per ora, lascio il metodo qui per futura implementazione.
    return this.http.get<Progetto>(`${this.apiUrl}/progetti/${id}`);
  }

  // --- Metodi per Chi Sono ---
  getChiSonoContent(): Observable<ChiSonoContent> {
    return this.http.get<ChiSonoContent>(`${this.apiUrl}/chi-sono`);
  }

  // --- Metodi per Contatti ---
  inviaMessaggio(payload: ContattoPayload): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/contatti`, payload);
  }

  // --- Metodi per Servizi ---
  getServizi(): Observable<Servizio[]> {
    return this.http.get<Servizio[]>(`${this.apiUrl}/servizi`);
  }

  // Sezione per Newsletter (commentata nel backend, ma pronta qui se la attivi)
  // subscribeToNewsletter(email: string): Observable<any> {
  //   return this.http.post(`${this.apiUrl}/newsletter/subscribe`, { email });
  // }
}