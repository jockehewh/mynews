import React from 'react'
import style from '@/styles/Slider.module.css'
import Slide from "./Slide"
import { useSelector } from 'react-redux';
export default function Slider() {
  const trending = useSelector(state => state.news.value.trendingArticles)
  return (
    <div className = {style.trending} >
      <h1>Trending</h1>
      <div className={style.slider}>
        <div>left</div>
        <div className={style.slides}>{trending.length > 0 ? <Slide/> : ""}</div>
        <div>right</div>
      </div>
    </div>
  )
}
