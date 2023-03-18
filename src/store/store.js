import { legacy_createStore, combineReducers } from "redux";
const rootReducer = combineReducers({});

export const store = legacy_createStore(rootReducer);
