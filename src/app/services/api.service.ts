import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  distinctUntilChanged,
  map,
  Observable,
  shareReplay,
} from 'rxjs';

import { environment  } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  getMenus(): Observable<Item[]> {
    return this.httpClient.get<Menus>(`${environment.backend}/api/menus?populate=*`).pipe(
      map((res) => res.data[0].items),distinctUntilChanged(),
      shareReplay(3)
    );
  }
  getLeistungen(): Observable<Leistung[]> {
    return this.httpClient.get<Leistungen>(`${environment.backend}/api/leistungen`).pipe(
      map((res) => res.data),distinctUntilChanged(),
      shareReplay(1)
    );
  }
  getData(): Observable<Data> {
    return this.httpClient.get<DataObject>(`${environment.backend}/api/datum?populate=*`).pipe(
      map((res) => res.data),distinctUntilChanged(),
      shareReplay(3)
    );
  }
  getJobs(): Observable<Job[]> {
    return this.httpClient.get<Jobs>(`${environment.backend}/api/jobs?populate=*`).pipe(
      map((res) => res.data),distinctUntilChanged(),
      shareReplay(1)
    );
  }
  getHighlights(): Observable<Highlight[]> {
    return this.httpClient.get<Highlights>(`${environment.backend}/api/highlights?populate=*`).pipe(
      map((res) => res.data),distinctUntilChanged(),
      shareReplay(1)
    );
  }

  getAngebote(): Observable<Angebot[]> {
    return this.httpClient.get<Angebote>(`${environment.backend}/api/angebote?populate=*`).pipe(
      map((res) => res.data),distinctUntilChanged(),
      shareReplay(1)
    );
  }
  getImpressum(): Observable<Impressum> {
    return this.httpClient
      .get<Impressum>(`${environment.backend}/api/impressum`)
      .pipe(distinctUntilChanged(), shareReplay(1));
  }
}
