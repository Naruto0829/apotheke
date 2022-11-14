import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, Subscription, distinctUntilChanged } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit, OnDestroy {
  @Output() searched = new EventEmitter<Hits<Record<string, any>>>();
  private _searchSubscription = new Subscription();
  searchTerm$ = new Subject<string>();
  searchForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _searchService: SearchService
  ) {
    this.searchForm = this._formBuilder.group({
      searchField: [''],
    });
  }

  ngOnInit(): void {
    this._searchSubscription = this._searchService
      .search(this.searchTerm$)
      .pipe(distinctUntilChanged())
      .subscribe((r) => {
        r.then((response) => {
          this.searched.emit(response.hits);
        });
      });
    this.searchTerm$.next('');
  }
  ngOnDestroy(): void {
    this._searchSubscription.unsubscribe();
  }
  search(e: Event) {
    if (e) {
      this.searchTerm$.next((<HTMLInputElement>e.target).value.trim());
    }
  }
}
