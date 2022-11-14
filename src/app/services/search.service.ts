import { Injectable } from '@angular/core';
import { MeiliSearch } from 'meilisearch';
import { debounceTime, distinctUntilChanged, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly _meilieKey = environment.meilisearchKey;
  private _searchClient = new MeiliSearch({
    host: environment.meilisearch,
    headers: {
      Authorization: `Bearer ${this._meilieKey}`,
      'Content-Type': 'application/json',
    },
  });
  config = {
    indexName: 'angebot',
    searchClient: this._searchClient,
  };
  constructor() {}
  search(searchTerm: Observable<string>, offset = 0) {
    return searchTerm.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      map((term) =>{
        return    this._searchClient
          .index('angebot')
          .search(term, { limit: 1000, filter: ``, offset })
  })
    );
  }
}
