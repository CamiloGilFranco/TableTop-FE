import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import languageReducer from './reducers/Language.reducer';


const rootReducer = combineReducers({
  languageReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;