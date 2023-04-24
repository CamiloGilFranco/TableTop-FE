import {
  DECREMENT,
  INCREMENT,
  UPLOADSUBTOTAL,
} from "../reducers/CartContent.reducer";

export const CartIncrementAction = (title, price, id, id_restaurant) => {
  return (dispatch, getState) => {
    const cartState = getState().cartReducer;
    let item;
    if (!cartState.some((element) => element.title === title)) {
      item = { title, price, quantity: 1, subtotal: price, id, id_restaurant };
      dispatch({ type: INCREMENT, payload: [...cartState, item] });
    } else {
      const itemIndex = cartState.findIndex(
        (element) => element.title === title
      );
      cartState[itemIndex] = {
        title,
        price,
        id,
        id_restaurant,
        quantity: cartState[itemIndex].quantity + 1,
        subtotal: cartState[itemIndex].subtotal + cartState[itemIndex].price,
      };
      dispatch({ type: INCREMENT, payload: [...cartState] });
    }
  };
};

export const CartDecrementAction = (title, price, id, id_restaurant) => {
  return (dispatch, getState) => {
    const cartState = getState().cartReducer;
    const itemIndex = cartState.findIndex((element) => element.title === title);
    if (cartState[itemIndex].quantity > 1) {
      cartState[itemIndex] = {
        title,
        price,
        id,
        id_restaurant,
        quantity: cartState[itemIndex].quantity - 1,
        subtotal: cartState[itemIndex].subtotal - cartState[itemIndex].price,
      };
    } else {
      cartState.splice(itemIndex, 1);
    }
    dispatch({ type: DECREMENT, payload: [...cartState] });
  };
};

export const addSubtotalAction = (subtotal) => {
  return (dispatch, getState) => {
    const subtotalState = getState().subtotalReducer;
    dispatch({ type: UPLOADSUBTOTAL, payload: subtotalState + subtotal });
  };
};

export const subtractSubtotalAction = (subtotal) => {
  return (dispatch, getState) => {
    const subtotalState = getState().subtotalReducer;
    dispatch({ type: UPLOADSUBTOTAL, payload: subtotalState - subtotal });
  };
};
