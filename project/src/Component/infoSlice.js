import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  namevalue: " ",
  surnamevalue: "",
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    nameShow: (state, action) => {
      state.namevalue = action.payload;
    },
    surnameShow: (state, action) => {
      state.surnamevalue = action.payload;
    },
  },
});

export const { nameShow, surnameShow } = infoSlice.actions;

export default infoSlice.reducer;
