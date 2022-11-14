import { ActionTypes } from '../../actions/cart';

export function cartReducer(state:any = [], action: any) {
  switch (action.type) {

    case ActionTypes.AddProduct:

      var preProduct  = state.filter((item: any) => item._id == action.payload._id);
      var totalAmount = action.payload.amount;
      var currentProduct = Object.assign({}, action.payload);

      if(preProduct.length > 0){
          totalAmount = totalAmount  //+ preProduct[0].amount;  stack add product? or limit product
      }

      return  [
        ...state.filter((item: any) => item._id !== action.payload._id),
          Object.assign(currentProduct,{amount: totalAmount}),
      ].sort((a, b) => (a._id > b._id) ? 1 : -1)

    case ActionTypes.RemoveProduct:
      return  [
        ...state.filter((item: any) => item._id !== action.payload._id)
      ];

    case ActionTypes.Reset:

      var preProduct  = state.filter((item: any) => item._id == action.payload._id);
      var currentProduct = Object.assign({}, ...preProduct);

      return  [
        ...state.filter((item: any) => item._id !== action.payload._id),
          Object.assign(currentProduct, { amount: action.payload.reset_num}),
      ].sort((a, b) => (a._id > b._id) ? 1 : -1)

      case ActionTypes.Refresh:
        return [];
    default:
      return state;
  }
}
