import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, AfterViewInit, OnInit, HostBinding } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  share,
  throttleTime,
} from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/services/api.service';

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden',
}

enum Direction {
  Up = 'Up',
  Down = 'Down',
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  styles: [
    `
      :host {
        position: fixed;
        top: 0;
        z-index: 999;
        width: 100%;
      }
    `,
  ],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0.9, height: '2.5rem', transform: 'translateY(-10%)' })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 0.95, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in')),
    ]),
  ],
})
export class NavbarComponent implements AfterViewInit, OnInit {
  pages$ = new Observable<Item[]>();
  public cart$: Observable<[]>;
  public cartCount: number = 0;
  private isVisible = true;
  hasCollapsed = true;
  constructor(
    private store: Store<{ cart: [] }>,
    private _apiService: ApiService
  ) {
    this.cart$ = store.select('cart');
    this.cart$.subscribe((data) => {
      var amount = 0;
      data.map((item: any, i: number) => {
        amount += parseInt(item.amount);
      });
      this.cartCount = amount;
    });
  }

  ngOnInit(): void {}

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }
  ngAfterViewInit() {
    this.pages$ = this._apiService.getMenus();
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const goingUp$ = scroll$.pipe(
      filter((direction) => direction === Direction.Up)
    );

    const goingDown$ = scroll$.pipe(
      filter((direction) => direction === Direction.Down)
    );

    goingUp$.subscribe(() => (this.isVisible = true));
    goingDown$.subscribe(() => (this.isVisible = false));
  }
  uncollapse() {
    this.hasCollapsed = !this.hasCollapsed;
  }
  openTarget = (url: string) => window.open(url, '_blank');

  openAndunCollapse = (url: string) => {
    this.uncollapse();
    this.openTarget(url);
    return;
  };
}
