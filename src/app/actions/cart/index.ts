import { Action } from '@ngrx/store';

export enum ActionTypes {
  AddProduct = '[Cart Component] Add',
  RemoveProduct = '[Cart Component] Remove',
  Reset = '[Cart Component] Reset',
  Refresh = '[Cart Component] Refresh',
}

interface AddProductPayload {
    _id: string,
    image: string,
    title: string,
    price: number,
    amount: number,
    discount: number
    uvp: number
}

export class AddProduct implements Action {
  readonly type = ActionTypes.AddProduct;
  constructor(readonly payload: AddProductPayload) {}
}

export class RemoveProduct implements Action {
  readonly type = ActionTypes.RemoveProduct;
  constructor(readonly payload: { _id: string }) {}
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;
  constructor(readonly payload: { _id: string, reset_num: number }) {}
}

export class Refresh implements Action {
  readonly type = ActionTypes.Refresh;
}
