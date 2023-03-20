import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    code: 'en',
    aviableLanguages: ['en', 'es'],
  },
  reducers: {
    setLanguage: (state, action) => {
      state.code = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;