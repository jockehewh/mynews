import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { count: 0, userName: "Xavier" }
}

export const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value.count++
    },
    decrement: (state, action) => {
      state.value.count--
    },
    addName: (state, action) => {
      state.value.userName = action.payload
    }
  }
})

export const { increment, decrement, addName } = exampleSlice.actions
export default exampleSlice.reducer