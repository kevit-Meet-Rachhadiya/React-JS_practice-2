// import { createSlice } from "@reduxJs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const LanguageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    languageChanger: (state, actions) => {
      state.value = actions.payload;
    },
  },
});

export const { languageChanger } = LanguageSlice.actions;

export default LanguageSlice.reducer;
