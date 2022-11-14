import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Output() removeItem = new EventEmitter<any>();
  @Output() changeCount = new EventEmitter<{ id: any; count: number }>();
  removeProduct(id: any) {
    this.removeItem.emit(id);
  }
  changeProductCN(arg0: number, _t24: HTMLSelectElement) {
    this.changeCount.emit({ id: arg0, count: <number>(<unknown>_t24.value) });
  }
  @Input() item = {
    title: '',
    discount: 0,
    uvp: 0,
    amount: 0,
    _id: 0,
    image: '',
  };
  constructor() {}

  ngOnInit(): void {}
}
