import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from './services/api.service';
import { LoadingService } from './services/loading.service';
import { delay } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Riem Apotheke';
  loader$ = new Observable<boolean>();
  loading = true;
  loaderSub = new Subscription();
  stop = false
  constructor(
    private _title: Title,
    private _meta: Meta,
    private _apiService: ApiService,
    private _loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.stop=true
    }, 3000);
    this.loader$ = this._loadingService.loadingSub.pipe(delay(0));
    this.loaderSub = this.loader$.subscribe(
      (loading) => (this.loading = loading)
    );
    this._title.setTitle('Riem-Apotheke');
    this._meta.addTags([
      {
        name: 'author',
        content: 'Riem-Apotheke',
      },
      {
        name: 'keywords',
        content: 'Riem Apotheke, Riem-Apotheke, riem-apotheke, riem apotheke',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ]);
  }
  ngOnDestroy(): void {
    this.loaderSub.unsubscribe();
  }
}
