export const ORDER_SWITCH = 'ORDER_SWITCH';
export const ORDER_ID = 'ORDER_ID';
export const ORDER_NUMBER = 'ORDER_NUMBER';

const initialState = {
  orderID: 0,
  orderSuccessful: false,
  numberOfOrders: 0
}

const orderReducer = (state= initialState, action) => {
  switch (action.type) {
    case ORDER_SWITCH:
      return {...state, orderSuccessful : action.payload}
      case ORDER_ID:
        return {...state, orderID : action.payload}
      case ORDER_NUMBER:
        return {...state, numberOfOrders: action.payload}
    default:
      return state
  }
}

export default orderReducer;
