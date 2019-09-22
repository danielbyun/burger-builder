import * as actiontypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.PURCHASE_INIT:
      return {
        ...state,
        purchased: false
      };
    case actiontypes.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true
      };
    case actiontypes.PURCHASE_BURGER_SUCCESS:
      const newOrder = {
        ...action.orderData,
        id: action.orderId
      };
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
      };
    case actiontypes.PURCHASE_BURGER_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
