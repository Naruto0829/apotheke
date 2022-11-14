import { Action } from '@ngrx/store';

export enum ActionTypes {
  selectProduct = '[Product Component] selectProduct',
}

interface AddProductPayload {
  user_id :string,
  product_id : string,
  name : string,

}

export class ChooseProduct implements Action {
  readonly type = ActionTypes.selectProduct;
  constructor(readonly payload: AddProductPayload) {}
}
