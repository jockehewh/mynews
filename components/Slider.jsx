import React from 'react'
import style from '@/styles/Slider.module.css'
import Slide from "./Slide"
export default function Slider() {
  return (
    <div>
      <h1>Trending</h1>
      <div className={style.slider}>
        <div>left</div>
        <div className={style.slides}></div>
        <div>right</div>
      </div>
    </div>
  )
}
