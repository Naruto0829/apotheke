import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { title } from 'process';
import { Observable } from 'rxjs';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { AddProduct, RemoveProduct, Reset } from '../../actions/cart';
import { ChooseProduct } from '../../actions/product';

@Component({
  selector: 'app-angebot',
  templateUrl: './angebot.component.html',
  styleUrls: ['./angebot.component.css'],
})
export class AngebotComponent implements OnInit {
  cart$: Observable<[]>;
  @Input() item: Angebot = {
    id: 0,
    name: '',
    uvp: 0,
    discount: 0,
    type: '',
    description: '',
    bild: {
      url: '',
    },
    price: 0,
    
  };

  constructor(
    private store: Store<{ cart: [] }>,
    public element: ElementRef,
    private _snackBar: SnackBarService
  ) {
    this.cart$ = store.select('cart');
  }
  public product_amount: any = 0;

  ngOnInit(): void{
  }

  //selected product
  selectProduct() {
    var userInfo = {
      user_id: '1',
      product_id: '12',
      name: 'Dee J Williams',
    };

    this.store.dispatch(new ChooseProduct(userInfo));
  }

  //add product to cart
  addCart() {
    if (this.product_amount > 0) {
      let product = {
        _id: this.item.id.toString(),
        image: this.item.bild.url,
        title: this.item.name,
        price: this.item.discount * this.item.uvp,
        amount: this.product_amount,
        discount: this.item.discount,
        uvp: this.item.uvp,
      };
      this.store.dispatch(new AddProduct(product));
      this.product_amount = 0;
      this._snackBar.openSnackBar(
        'Artikel in Einkaufswagen erfolgreich hinzugefügt',
        ''
      );
    } else {
      this._snackBar.openSnackBar('Ungültiger Wert', '');
    }
  }

  //remove proudct in cart
  increase() {
    if (this.product_amount > 14) {
      this._snackBar.openSnackBar(
        'Ups, die Anzahl der Produkte ist auf 15 Stück begrenzt',
        'Einkaufswagen'
      );
    } else {
      this.product_amount++;
    }
  }

  //reset cart storage
  decrease() {
    if (this.product_amount != 0) {
      this.product_amount--;
    }
  }
}
