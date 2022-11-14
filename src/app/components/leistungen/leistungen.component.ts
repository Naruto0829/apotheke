import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-leistungen',
  templateUrl: './leistungen.component.html',
  styleUrls: ['./leistungen.component.css'],
})
export class LeistungenComponent implements OnInit {
  leistungen$ = new Observable<Leistung[]>();
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.leistungen$ = this.apiService.getLeistungen();
  }
}
