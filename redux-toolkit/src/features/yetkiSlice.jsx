import { createSlice } from "@reduxjs/toolkit"


const yetkiSlice = createSlice({
    name : "yetkiSlice",
    initialState : {
      email: "",
      password: "",

      reducers : {
       
        createUsers : (state, {payload})=> {
          console.log(state, payload)
        }

      }
    }
}) 

export const {createUsers}= yetkiSlice.actions;
export default yetkiSlice.reducer