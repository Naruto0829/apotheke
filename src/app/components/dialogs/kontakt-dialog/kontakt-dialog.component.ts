import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Refresh } from 'src/app/actions/cart';
import { Kontakt } from 'src/app/interfaces/kontakt';
import { EmailService } from 'src/app/services/email.service';
@Component({
  selector: 'app-kontakt-dialog',
  templateUrl: './kontakt-dialog.component.html',
  styleUrls: ['./kontakt-dialog.component.css'],
})
export class KontaktDialogComponent implements OnInit {
  public storedProducts: any = [];
  public totalPrice = 0;
  show = false;
  constructor(
    private _emailService: EmailService,
    private store: Store<{ cart: [] }>,
    @Inject(MAT_DIALOG_DATA)
    public data: { products: any[]; totalPrice: number }
  ) {}

  ngOnInit(): void {
    this.storedProducts = this.data.products;
    this.totalPrice = this.data.totalPrice;
  }
  orderProduct(kontakt: Kontakt) {
    let order = this.makeMessageTxT(this.storedProducts, kontakt);
    this._emailService.SendEmail(order).subscribe(
      (r) => r,
      (error) => console.log(error)
    );
    this.store.dispatch(new Refresh());
    this.show = true;
  }

  makeMessageTxT(
    products: {
      title: string;
      amount: number;
      discount: number;
      uvp: number;
    }[],
    kontakt: Kontakt
  ) {
    let details: { [key: string]: any } = {};
    products.forEach(
      (item: {
        title: string;
        amount: number;
        discount: number;
        uvp: number;
      }) => {
        details[item.title] = {
          product: item.title,
          amount: item.amount,
          discount: item.discount,
          preis: (item.uvp * (1 - item.discount / 100) * item.amount).toFixed(
            2
          ),
        };
      }
    );
    let order = {
      data: {
        anrede: kontakt.anrede,
        name: kontakt.name,
        vorname: kontakt.vorname,
        email: kontakt.email,
        nachricht: kontakt.nachricht,
        telefon: kontakt.telefon,
        preis: this.totalPrice,
        details,
      },
    };
    return JSON.stringify(order);
  }
}
