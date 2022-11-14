import { ChooseProduct } from './../../actions/product';
import { ActionTypes } from '../../actions/product';

export const initialState: any = {
  user_id :'',
  product_id : '',
  name : '',
  birthday:'',
  hobbies : '',
};

export function productReducer(state: Object = initialState, action: any) {

  switch (action.type) {
    case ActionTypes.selectProduct:
        return {
          ...state,
          ...action.payload
        };
    default:
      return state;
  }
}
