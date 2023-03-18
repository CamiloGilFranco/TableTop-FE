import { INCREMENT } from "../reducers/CartContent.reducer";

export const CartIncrementAction = (title, price) => {
  return (dispatch, getState) => {
    const cartState = getState().cartReducer;
    console.log(cartState);
    let item;
    if (!cartState.some((element) => element.title === title)) {
      item = { title, price, quantity: 1, subtotal: price };
      dispatch({ type: INCREMENT, payload: [...cartState, item] });
    } else {
      const itemIndex = cartState.findIndex(
        (element) => element.title === title
      );
      cartState[itemIndex] = {
        title,
        price,
        quantity: cartState[itemIndex].quantity + 1,
        subtotal: cartState[itemIndex].subtotal + cartState[itemIndex].price,
      };
      dispatch({ type: INCREMENT, payload: cartState });
    }
  };
};
export const CartDecrementAction = () => {};
