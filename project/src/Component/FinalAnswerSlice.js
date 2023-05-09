import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  finalanswer: {},
};

export const FinalAnswerSlice = createSlice({
  name: "finalanswer",
  initialState,
  reducers: {
    finalanswershow: (state, action) => {
      state.finalanswer[action.payload.i] = action.payload.value;
    },
  },
});

export const { finalanswershow } = FinalAnswerSlice.actions;

export default FinalAnswerSlice.reducer;
