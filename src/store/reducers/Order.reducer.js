export const NEW_ORDER = "ORDER_SWITCH";
export const RESET_ORDER = "ORDER_ID";

const initialState = {
  orderStatus: null,
  orderData: {},
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_ORDER:
      return action.payload;
    case RESET_ORDER:
      return action.payload;
    default:
      return state;
  }
};

export default orderReducer;
