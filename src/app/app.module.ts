// src/app/app.module.ts
import { NgModule } from '@angular/core'; // Rimosso PLATFORM_ID, Inject
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// Rimosso MatIconRegistry e DomSanitizer da qui

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Il costruttore ora è vuoto o puoi rimuoverlo se non ci sono altre iniezioni
  // Rimosso il codice di MatIconRegistry per le icone SVG
  constructor() {}
}
