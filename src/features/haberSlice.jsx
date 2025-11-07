import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getirData = createAsyncThunk("haberSlice/getirData", async () => {
  const res = await axios.get(
  `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
);

  return res.data.articles;
  
});

const haberSlice = createSlice({
  name: "haberSlice",
  
  initialState: {
    haberler: [],

    loading: true,
  },
  reducers: {
    clear: (state,{payload}) => {
      state.haberler= state.haberler.filter((a)=> a.url !== payload)
    },
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
