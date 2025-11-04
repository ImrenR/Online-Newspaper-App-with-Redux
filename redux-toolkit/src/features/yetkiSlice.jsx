import { createSlice } from "@reduxjs/toolkit"


const yetkiSlice = createSlice({
    permission : "yetkiSlice",
    initialState : {
      email: "",
      password: "",
    }
}) 

export default yetkiSlice