import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anfahrt',
  templateUrl: './anfahrt.component.html',
  styleUrls: ['./anfahrt.component.css']
})
export class AnfahrtComponent implements OnInit {
stop=false
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.stop=true
    }, 1500);
  }

}
