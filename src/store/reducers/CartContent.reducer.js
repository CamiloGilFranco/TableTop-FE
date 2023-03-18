export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return action.payload;
    case DECREMENT:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default cartReducer;
