// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Definizione delle rotte principali dell'applicazione
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },

  // Rotta per la sezione 'progetti' con le sue rotte figlie
  {
    path: 'progetti',
    loadChildren: () => import('./pages/progetti/progetti.module').then(m => m.ProgettiModule)
    // Non è più necessario definire qui la rotta :id per progetto-detail.
    // Quella rotta è già gestita all'interno di ProgettiRoutingModule.
  },

  { path: 'chi-sono', loadChildren: () => import('./pages/chi-sono/chi-sono.module').then(m => m.ChiSonoModule) },

  { path: 'contatti', loadChildren: () => import('./pages/contatti/contatti.module').then(m => m.ContattiModule) },

  { path: 'servizi', loadChildren: () => import('./pages/servizi/servizi.module').then(m => m.ServiziModule) },

  // TODO: Aggiungere rotte per Frontend, Backend, Database, Administrator quando i moduli saranno pronti
  // { path: 'frontend', loadChildren: () => import('./pages/frontend/frontend.module').then(m => m.FrontendModule) },
  // { path: 'backend', loadChildren: () => import('./pages/backend/backend.module').then(m => m.BackendModule) },
  // { path: 'database', loadChildren: () => import('./pages/database/database.module').then(m => m.DatabaseModule) },
  // { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
