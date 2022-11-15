import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-box',
  templateUrl: './feature-box.component.html',
  styleUrls: ['./feature-box.component.css'],
})
export class FeatureBoxComponent implements OnInit {
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

  @Input() offen = true;
  constructor() {}

  ngOnInit(): void {
      console.log(this.offen)
  }
}
