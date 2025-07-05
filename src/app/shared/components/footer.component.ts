// src/app/shared/components/footer/footer.component.ts

import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Importa DomSanitizer e SafeResourceUrl

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public currentYear: number = new Date().getFullYear();

  githubUrl: string = 'https://github.com/Aleksander-developer';
  linkedinUrl: string = 'https://www.linkedin.com/in/aleksander-nikolli-235b37120';
  instagramUrl: string = 'https://www.instagram.com/mr_nikolli14?igsh=MWVvbHYwMXQ5bnExdw%3D%3D&utm_source=qr';
  facebookUrl: string = 'https://www.facebook.com/share/1AgfrE24jU/?mibextid=wwXIfr';

  whatsappNumber: string = '393463515173'; // Numero WhatsApp senza il '+'
  emailAddress: string = 'aleksandernikollibusiness@gmail.com';

  // Dichiarazione e INIZIALIZZAZIONE della proprietà per la URL di WhatsApp sanificata
  whatsappLink: SafeResourceUrl; 

  // Inietta DomSanitizer nel costruttore
  constructor(private sanitizer: DomSanitizer) {
    // Sanifica la URL di WhatsApp QUI, nel costruttore
    // Tutte le proprietà necessarie (this.whatsappNumber) sono già disponibili.
    this.whatsappLink = this.sanitizer.bypassSecurityTrustResourceUrl(`https://wa.me/${this.whatsappNumber}`);
  }

  ngOnInit(): void {
    // Se non hai altre logiche qui, puoi anche rimuovere ngOnInit e implements OnInit
  }
}