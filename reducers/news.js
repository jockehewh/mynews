import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { mainArticles: [], trendingArticles: [] }
}

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setTrendingArticles: (state, action) => {
      console.log("trendiing",action.payload)
      state.value.trendingArticles = action.payload
    },
    setMainArticles: (state, action) => {
      console.log("main", action.payload)
      state.value.mainArticles = action.payload
    },
  }
})

export const { setTrendingArticles, setMainArticles } = newsSlice.actions
export default newsSlice.reducer