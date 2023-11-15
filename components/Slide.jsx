import React from 'react'
import style from '@/styles/Slide.module.css'
import { useSelector } from 'react-redux';

export default function Slide() {
  const articles = useSelector(state=> state.news.value.trendingArticles)
  return (
    <a className={style.slide}>
      <img src={articles[0].urlToImage} alt={articles[0].title} />
      <div className={style.details}>
        <p>{"redux TECH"} - <span>{articles[0].publishedAt}</span></p>
        <h1>{articles[0].title}</h1>
        <p>{articles[0].content}</p>
        <p>{articles[0].author}</p>
      </div>
    </a>
  )
}
