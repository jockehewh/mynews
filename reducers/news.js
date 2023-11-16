import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { mainArticles: [], trendingArticles: [], favorites: [
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Tristan Kennedy",
      "title": "Skiing Is Getting Riskier",
      "description": "The threat of avalanches is rising with global warming, but technology can help protect skiers on and off the slopes.",
      "url": "https://www.wired.com/story/avalanche-threat-ski-risk/",
      "urlToImage": "https://media.wired.com/photos/654ece1ce8bd90ff3e462809/191:100/w_1280,c_limit/offpiste-sci-GettyImages-1749819283-(1).jpg",
      "publishedAt": "2023-11-11T12:00:00Z",
      "content": "As Olivier Gardet piloted the drone around the mountain, his colleague, who was looking through goggles connected to its infrared camera, could see the avalanche clearly: a long tongue of debris, vis… [+4171 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Lily Hay Newman",
      "title": "This Cryptomining Tool Is Stealing Secrets",
      "description": "Plus: Details emerge of a US government social media-scanning tool that flags “derogatory” speech, and researchers find vulnerabilities in the global mobile communications network.",
      "url": "https://www.wired.com/story/cryptominer-espionage-campaign-security-roundup/",
      "urlToImage": "https://media.wired.com/photos/653c26a5a4dd0111031f340f/191:100/w_1280,c_limit/Security-News-This-Week--A-Dull-Cryptominer-Is-Actually-Part-of-a-Sophisticated-and-Expansive-Espionage-Campaign-Security-GettyImages-1087732912.jpg",
      "publishedAt": "2023-10-28T13:00:00Z",
      "content": "As the Israel-Hamas war raged on this week and Israel expanded its ground invasion of the Gaza Strip, the territory's compromised internet infrastructure and access to connectivity went fully dark on… [+5479 chars]"
    },
  ] }
}

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setTrendingArticles: (state, action) => {
      console.log("trending",action.payload)
      state.value.trendingArticles = action.payload
    },
    setMainArticles: (state, action) => {
      console.log("main", action.payload)
      state.value.mainArticles = action.payload
    },
    setFavorites: (state, action) => {
      console.log("main", action.payload)
      state.value.favorites.push(action.payload)
    },
    getFavorites: (state, action) => {
      
      return state.value.favorites
    },
  }
})

export const {
  setTrendingArticles,
  setMainArticles,
  setFavorites,
  getFavorites } = newsSlice.actions
export default newsSlice.reducer