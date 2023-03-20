import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./reducers/Language.reducer";


const store = configureStore({
  reducer: {
    language: languageReducer,
  }
});

export default store