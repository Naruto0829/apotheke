import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RemoveProduct, Reset } from '../../actions/cart';
import { KontaktDialogComponent } from '../dialogs/kontakt-dialog/kontakt-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-einkaufswagen',
  templateUrl: './einkaufswagen.component.html',
  styleUrls: ['./einkaufswagen.component.css'],
})
export class EinkaufswagenComponent implements OnInit {
  public cart$: Observable<[]>;
  public storedProduct: any = [];
  public cartCount = 0;
  public totalPrice = 0;
  public productCount = 0;
  close = false;
  constructor(
    private store: Store<{ cart: [] }>,
    public kontaktDialog: MatDialog
  ) {
    this.cart$ = store.select('cart');
    this.cart$.subscribe((data) => {
      var amount: number = 0;
      var price: number = 0;

      data.map((item: any, i: number) => {
        amount += parseInt(item.amount);
        price +=
          item.amount *
          (Math.round(item.uvp * (1 - item.discount / 100) * 100) / 100);
      });

      this.cartCount = amount;
      this.totalPrice = price;
      this.storedProduct = data;
    });
  }

  ngOnInit(): void {}
  changeProductCN(e: { id: any; count: number }) {
    let product_id = e.id;
    let amount = e.count;
    let resetCount = {
      _id: product_id,
      reset_num: amount,
    };
    this.store.dispatch(new Reset(resetCount));
  }

  removeProduct(product_id: any): void {
    this.store.dispatch(new RemoveProduct({ _id: product_id }));
  }

  openKontaktDialog() {
    const ref = this.kontaktDialog.open(KontaktDialogComponent, {
      width: '80vw',
      data: {
        products: this.storedProduct,
        totalPrice: this.totalPrice,
      },
    });

    ref.afterOpened().subscribe((_) => window.scrollTo(0, 0));
    ref.afterClosed().subscribe((_) => window.scrollTo(0, 0));
  }
}
