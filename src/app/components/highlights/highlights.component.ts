import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css'],
})
export class HighlightsComponent implements OnInit {
  highlights$ = new Observable<Highlight[]>();
  highlight?: Highlight;
  hasOdd = false;
  highlights: Highlight[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.highlights$ = this.apiService.getHighlights().pipe(
      tap((h) => {
        this.highlights = h.reverse();
        if (h.length % 2 != 0) {
          this.hasOdd = true;
          this.highlight = this.highlights.shift();
        }
      })
    );
  }
}
