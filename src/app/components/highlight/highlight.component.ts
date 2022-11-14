import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.css'],
})
export class HighlightComponent implements OnInit {
  @Input() highlight: Highlight = {
    title: '',
    description: '',
    color: '',
    publishedAt: '',
  };
  bild = '';
  date = new Date();
  day = '';
  year = '';
  month = '';
  constructor() {}

  ngOnInit(): void {
    let b = this.highlight.bild?.formats;
    let width = window.innerWidth;
    if (b) {
      if (width < 600) this.bild = b.small.url;
      else if (width < 1000) this.bild = b.medium.url;
      else this.bild = b.large.url;
    }
    this.date = new Date(this.highlight.publishedAt);
    this.day = this.date.getDay().toString();
    this.month = this.date.getMonth().toString();
    this.year = this.date.getFullYear().toString();
  }
}
