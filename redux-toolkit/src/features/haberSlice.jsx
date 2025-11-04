import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getirData = createAsyncThunk("haberSlice/getirData", async () => {
  const res = await axios.get(
    "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=81a4163ea7eb4bccb489151972100adb"
  );
  return res
  
});

const haberSlice = createSlice({
  name: "haberSlice",
  initialState: {
    haberler: [],
    loading: true,
  },
  reducers: {
    clear: () => {},
  },



  extraReducers: (builder) => {
    builder
      .addCase(getirData.pending, (state) => {
        state.loading = true;
      })
      .addCase(getirData.fulfilled, (state, {payload}) => {
      state.haberler = payload
      state.loading = false
      });
  },
});

export const {clear} = haberSlice.actions

export default haberSlice.reducer;
