// languageSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: true,
  reducers: {
    toggleLanguage: (state) => !state,
  },
});

export const { toggleLanguage } = languageSlice.actions;

export const selectLanguage: any = (state: { language: boolean }) => state.language;

export default languageSlice.reducer;
