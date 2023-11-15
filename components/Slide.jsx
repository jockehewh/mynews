import React from 'react'
import style from '@/styles/Slide.module.css'

export default function Slide() {
  return (
    <a className={style.slide}>
      <img src="REDUX urlToImage" alt="Redux title" />
      <div className={style.details}>
        <p>{"redux TECH"} - <span>{"redux publishedAt"}</span></p>
        <h1>{"redux title"}</h1>
        <p>{"redux content"}</p>
        <p>{"redux author"}</p>
      </div>
    </a>
  )
}
