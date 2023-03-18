import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer, subtotalReducer } from "./reducers/CartContent.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ cartReducer, subtotalReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
