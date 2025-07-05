// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Definizione delle rotte principali dell'applicazione
const routes: Routes = [
  // Rotta di reindirizzamento: quando l'URL è vuoto (''), reindirizza a '/home'
  // 'pathMatch: 'full'' assicura che l'intero percorso sia vuoto per il reindirizzamento
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Rotta per la sezione 'home': carica il modulo HomeModule solo quando l'utente naviga a '/home' (lazy loading)
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

  // Rotta per la sezione 'progetti': carica il modulo ProgettiModule in modo pigro
  { path: 'progetti', loadChildren: () => import('./pages/progetti/progetti.module').then(m => m.ProgettiModule) },

  // Rotta per la sezione 'chi-sono': carica il modulo ChiSonoModule in modo pigro
  { path: 'chi-sono', loadChildren: () => import('./pages/chi-sono/chi-sono.module').then(m => m.ChiSonoModule) },

  // Rotta per la sezione 'contatti': carica il modulo ContattiModule in modo pigro
  { path: 'contatti', loadChildren: () => import('./pages/contatti/contatti.module').then(m => m.ContattiModule) },

  // Rotta per la sezione 'servizi': carica il modulo ServiziModule in modo pigro
  { path: 'servizi', loadChildren: () => import('./pages/servizi/servizi.module').then(m => m.ServiziModule) },
  { path: 'progetti', loadChildren: () => import('./pages/progetti/progetto-detail/progetto-detail.module').then(m => m.ProgettoDetailModule) },

  // TODO: Aggiungere rotte per Frontend, Backend, Database, Administrator quando i moduli saranno pronti
  // { path: 'frontend', loadChildren: () => import('./pages/frontend/frontend.module').then(m => m.FrontendModule) },
  // { path: 'backend', loadChildren: () => import('./pages/backend/backend.module').then(m => m.BackendModule) },
  // { path: 'database', loadChildren: () => import('./pages/database/database.module').then(m => m.DatabaseModule) },
  // { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },

  // Rotta wildcard: cattura qualsiasi percorso non corrispondente e reindirizza a 'home'
  // È buona pratica avere una rotta wildcard alla fine per gestire URL non validi
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    // Configura il router radice dell'applicazione con le rotte definite
    RouterModule.forRoot(routes, {
      // Opzioni di configurazione del router:
      scrollPositionRestoration: 'enabled', // Quando si naviga, la posizione di scroll viene ripristinata in alto
      anchorScrolling: 'enabled'            // Abilita lo scorrimento verso gli anchor link (es. #sezione)
      // enableTracing: true // Abilita il tracing degli eventi del router per il debug (da rimuovere in produzione)
    })
  ],
  exports: [
    // Esporta RouterModule per renderlo disponibile ad altri moduli che lo importano (es. AppModule)
    RouterModule
  ]
})
export class AppRoutingModule { }
