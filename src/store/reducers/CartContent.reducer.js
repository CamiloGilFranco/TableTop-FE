export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const UPLOADSUBTOTAL = "UPLOADSUBTOTAL";
export const RESET_CART = "RESET_CART";

const initialState = [];
const initialSubtotal = 0;

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return action.payload;
    case DECREMENT:
      return action.payload;
    case RESET_CART:
      return action.payload;
    default:
      return state;
  }
};

export const subtotalReducer = (state = initialSubtotal, action) => {
  switch (action.type) {
    case UPLOADSUBTOTAL:
      return action.payload;
    default:
      return state;
  }
};
