import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datenschutz',
  templateUrl: './datenschutz.component.html',
  styleUrls: ['./datenschutz.component.css'],
})
export class DatenschutzComponent implements OnInit {
  stop = false;
  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0,0)
    setTimeout(() => {
      this.stop = true;
    }, 1000);
  }
}
