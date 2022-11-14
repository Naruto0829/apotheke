import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() data: Data = {
    name: '',
    number: 0,
    fax: 0,
    email: '',
    adresse: {
      strasse: '',
      nr: 0,
      plz: 0,
      ort: '',
    },
    werktag: [],
    motto: '',
    beschreibung: '',
    greeting: '',
  };
  emailLink = '';
  bild = '';
  constructor() {}

  ngOnInit(): void {
    this.emailLink = `mailto:${this.data.email}`;
    this.bild = this.data.header_bild!.url;
    let width = window.innerWidth;
    // if (b) {
      // if (width < 600) this.bild = b.small.url;
      // else if (width < 1000) this.bild = b.medium.url;
      // else this.bild = this.data.header_bild!.url;
    // }
  }
}
