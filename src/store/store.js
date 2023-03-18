import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "../features/language/languageSlice";


const store = configureStore({
  reducer: {
    language: languageReducer,
  }
});

export default store