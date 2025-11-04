import { configureStore } from "@reduxjs/toolkit";
import yetkiSlice from "../features/yetkiSlice";




export const store = configureStore({
  reducer: {
    permission : yetkiSlice,
  },
})