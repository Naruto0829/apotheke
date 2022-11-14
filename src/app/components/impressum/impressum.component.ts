import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.css'],
})
export class ImpressumComponent implements OnInit {
  impressum$ = new Observable<Impressum>();
  constructor(private _apiService: ApiService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.impressum$ = this._apiService.getImpressum();
  }
}
