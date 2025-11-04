import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getirData = createAsyncThunk("haberSlice/getirData",
  async()=>{
    await axios.get("https:/newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=81a4163ea7eb4bccb489151972100adb")
  }
);

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
