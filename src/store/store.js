import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer, subtotalReducer } from "./reducers/CartContent.reducer";
import languageReducer from './reducers/Language.reducer';
import thunk from "redux-thunk";

const rootReducer = combineReducers({ cartReducer, subtotalReducer, languageReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export default store;