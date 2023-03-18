import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import cartReducer from "./reducers/CartContent.reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ cartReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
