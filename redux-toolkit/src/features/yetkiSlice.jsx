import { createSlice } from "@reduxjs/toolkit";

const yetkiSlice = createSlice({
  name: "yetkiSlice",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    createUsers: (state, { payload }) => {
     state.email =payload.email,
     state.password =payload.password
    },
  },
});

export const { createUsers } = yetkiSlice.actions;
export default yetkiSlice.reducer;
