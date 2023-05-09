import languageSlice from "../Component/languageslice";
import { configureStore } from "@reduxjs/toolkit";
import infoSlice from "../Component/infoSlice";
import FinalAnswerSlice from "../Component/FinalAnswerSlice";

const store = configureStore({
  reducer: {
    language: languageSlice,
    information: infoSlice,
    finalanswer: FinalAnswerSlice,
  },
});

export default store;
