import { createSlice } from "@reduxjs/toolkit";

const haberSlice = createSlice({
  name: haberSlice,
  initialState: {
    haberler: [],
    loading: true,
  },
  reducers: {
    clear: () => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(incrementAsync.fullfilled, (state, action) => {
        state.status = "idle";
        state.value += action.payload;
      });
  },
});

export default haberSlice;
