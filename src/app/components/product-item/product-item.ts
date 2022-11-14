import { Component, OnInit, ElementRef } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddProduct, RemoveProduct, Reset } from '../../actions/cart';
import { ChooseProduct } from '../../actions/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})

export class ProductItemComponent  {

  cart$: Observable<[]>;

  constructor(private store: Store<{ cart: [] }>, public element: ElementRef) {
    this.cart$ = store.select('cart');
  }

  public product_amount:any = 0

  ngOnInit(): void {
  }

  //selected product
  selectProduct(){

    var userInfo = {
      user_id : "1",
      product_id : '12',
      name : 'Dee J Williams',
      birthday: '29 August 1999',
      hobbies : 'Cooking, Fishing, Darwing',
    };

    this.store.dispatch(new ChooseProduct(userInfo));

  }

  //add product to cart
  addCart() {
    if(this.product_amount > 0){

      var product = {
        _id: '1',
        image: '',
        title: 'Test',
        price: 15.7,
        amount: this.product_amount,
      }

      this.store.dispatch(new AddProduct(product));
      this.product_amount = 0;

    } else{
      alert("Invalid Amount");
    }

  }

  //remove proudct in cart
  increase() {
    this.product_amount++;
  }

  //reset cart storage
  decrease() {
    if(this.product_amount != 0){
      this.product_amount--;
    }
  }

}
