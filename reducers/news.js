import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { mainArticles: [], trendingArticles: [] }
}

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getArticles: (state, action) => {
      fetch("https://newsapi.org/v2/everything?q=tech&apiKey=57e20f764388443d9513de7fb3d03539")
      .then(res=> res.json())
      .then(data => data.articles)
      .then(articles=>{
        state.value.trendingArticles.push(articles.shift())
        state.value.trendingArticles.push(articles.shift())
        state.value.trendingArticles.push(articles.shift())
        state.value.trendingArticles.push(articles.shift())
        state.value.mainArticles = [...articles]
      })
    }
  }
})

export const { getArticles, hydrateMainAndTrending } = newsSlice.actions
export default newsSlice.reducer