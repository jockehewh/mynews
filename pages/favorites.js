import Slider from "@/components/Slider";
import { useDispatch, useSelector } from "react-redux";
import { setTrendingArticles, setMainArticles } from "@/reducers/news";
import { useEffect, useState } from "react";
import Favorites from "@/components/Favorites";
import Navbar from "@/components/Navbar";

export default function HomeFav() {
  const dispatch = useDispatch()
  const obj = useSelector(state => state.news.value.favorites)
  return (
    <>
      <Navbar />
      <h1 style={{textAlign: "center"}}>Favorites</h1>
      <Favorites/>
    </>
  );
}
